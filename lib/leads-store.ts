import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";

export type LeadStatus = "new" | "contacted" | "booked" | "lost" | "deleted";

export type Lead = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date?: string;
  message?: string;
  status: LeadStatus;
  notes?: string;
};

const DATA_DIR =
  process.env.LEADS_DIR ||
  (process.env.NODE_ENV === "production" ? "/data/leads" : path.join(process.cwd(), ".data"));

async function ensureDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch {
    // fall back to /tmp if /data isn't writable (non-persistent but functional)
    const fallback = path.join("/tmp", "ccc-leads");
    await fs.mkdir(fallback, { recursive: true });
    return fallback;
  }
  return DATA_DIR;
}

export async function listLeads(): Promise<Lead[]> {
  const dir = await ensureDir();
  let files: string[] = [];
  try {
    files = await fs.readdir(dir);
  } catch {
    return [];
  }
  const leads: Lead[] = [];
  for (const f of files) {
    if (!f.endsWith(".json")) continue;
    try {
      const raw = await fs.readFile(path.join(dir, f), "utf8");
      leads.push(JSON.parse(raw));
    } catch {
      // skip corrupt
    }
  }
  return leads.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
}

export async function createLead(input: Omit<Lead, "id" | "createdAt" | "status"> & { status?: LeadStatus }): Promise<Lead> {
  const dir = await ensureDir();
  const lead: Lead = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    status: "new",
    ...input,
  };
  await fs.writeFile(path.join(dir, `${lead.id}.json`), JSON.stringify(lead, null, 2), "utf8");
  return lead;
}

export async function updateLead(id: string, patch: Partial<Lead>): Promise<Lead | null> {
  const dir = await ensureDir();
  const file = path.join(dir, `${id}.json`);
  try {
    const raw = await fs.readFile(file, "utf8");
    const existing: Lead = JSON.parse(raw);
    const next: Lead = { ...existing, ...patch, id: existing.id, createdAt: existing.createdAt };
    await fs.writeFile(file, JSON.stringify(next, null, 2), "utf8");
    return next;
  } catch {
    return null;
  }
}

export async function softDeleteLead(id: string): Promise<boolean> {
  const result = await updateLead(id, { status: "deleted" });
  return !!result;
}

export function checkAdminAuth(headers: Headers): boolean {
  const password = headers.get("x-admin-password");
  const expected = process.env.ADMIN_PASSWORD || "carpetcare2026";
  return !!password && password === expected;
}
