import { getStore } from "@netlify/blobs";

const expected = () => process.env.ADMIN_PASSWORD || "carpetcare2026";

export default async (req) => {
  const pw = req.headers.get("x-admin-password");
  if (pw !== expected()) return Response.json({ error: "Unauthorized" }, { status: 401 });
  const store = getStore("leads");
  const { blobs } = await store.list();
  const leads = [];
  for (const b of blobs) {
    const lead = await store.get(b.key, { type: "json" });
    if (lead) leads.push(lead);
  }
  const url = new URL(req.url);
  const status = url.searchParams.get("status");
  const filtered = status ? leads.filter((l) => l.status === status) : leads;
  filtered.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));
  return Response.json({ leads: filtered });
};

export const config = { path: "/.netlify/functions/get-leads" };
