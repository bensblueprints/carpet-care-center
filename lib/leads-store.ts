import { randomUUID } from "crypto";
import { db } from "./db";

export type LeadStatus = "new" | "contacted" | "booked" | "lost" | "archived" | "deleted";

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
  updatedAt?: string;
};

type LeadRow = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  preferred_date: string | null;
  message: string | null;
  status: string;
  notes: string | null;
  created_at: string;
  updated_at: string | null;
};

function rowToLead(r: LeadRow): Lead {
  return {
    id: r.id,
    name: r.name,
    email: r.email,
    phone: r.phone,
    service: r.service,
    date: r.preferred_date || undefined,
    message: r.message || undefined,
    status: (r.status as LeadStatus) || "new",
    notes: r.notes || undefined,
    createdAt: r.created_at,
    updatedAt: r.updated_at || undefined,
  };
}

export function listLeads(statusFilter?: string): Lead[] {
  let rows: LeadRow[];
  if (statusFilter) {
    rows = db
      .prepare("SELECT * FROM leads WHERE status = ? ORDER BY created_at DESC")
      .all(statusFilter) as LeadRow[];
  } else {
    rows = db
      .prepare("SELECT * FROM leads WHERE status != 'deleted' ORDER BY created_at DESC")
      .all() as LeadRow[];
  }
  return rows.map(rowToLead);
}

export function createLead(input: {
  name: string;
  email: string;
  phone: string;
  service: string;
  date?: string;
  message?: string;
}): Lead {
  const id = randomUUID();
  const now = new Date().toISOString();
  db.prepare(
    `INSERT INTO leads (id, name, email, phone, service, preferred_date, message, status, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, 'new', ?)`
  ).run(
    id,
    input.name,
    input.email,
    input.phone,
    input.service,
    input.date || null,
    input.message || null,
    now
  );
  const row = db.prepare("SELECT * FROM leads WHERE id = ?").get(id) as LeadRow;
  return rowToLead(row);
}

export function updateLead(id: string, patch: Partial<Lead>): Lead | null {
  const existing = db.prepare("SELECT * FROM leads WHERE id = ?").get(id) as LeadRow | undefined;
  if (!existing) return null;
  const now = new Date().toISOString();
  db.prepare(
    `UPDATE leads SET
      name = COALESCE(?, name),
      email = COALESCE(?, email),
      phone = COALESCE(?, phone),
      service = COALESCE(?, service),
      preferred_date = COALESCE(?, preferred_date),
      message = COALESCE(?, message),
      status = COALESCE(?, status),
      notes = COALESCE(?, notes),
      updated_at = ?
     WHERE id = ?`
  ).run(
    patch.name ?? null,
    patch.email ?? null,
    patch.phone ?? null,
    patch.service ?? null,
    patch.date ?? null,
    patch.message ?? null,
    patch.status ?? null,
    patch.notes ?? null,
    now,
    id
  );
  const row = db.prepare("SELECT * FROM leads WHERE id = ?").get(id) as LeadRow;
  return rowToLead(row);
}

export function softDeleteLead(id: string): boolean {
  const res = db.prepare("UPDATE leads SET status = 'archived', updated_at = ? WHERE id = ?")
    .run(new Date().toISOString(), id);
  return res.changes > 0;
}

export function checkAdminAuth(headers: Headers): boolean {
  const password = headers.get("x-admin-password");
  const expected = process.env.ADMIN_PASSWORD || "carpetcare2026";
  return !!password && password === expected;
}
