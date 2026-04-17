import { getStore } from "@netlify/blobs";

const expected = () => process.env.ADMIN_PASSWORD || "carpetcare2026";

export default async (req) => {
  const pw = req.headers.get("x-admin-password");
  if (pw !== expected()) return Response.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json().catch(() => ({}));
  const { id, ...patch } = body;
  if (!id) return Response.json({ error: "Missing id" }, { status: 400 });
  const store = getStore("leads");
  const existing = await store.get(`${id}.json`, { type: "json" });
  if (!existing) return Response.json({ error: "Not found" }, { status: 404 });
  const next = { ...existing, ...patch, id: existing.id, createdAt: existing.createdAt };
  await store.setJSON(`${id}.json`, next);
  return Response.json({ ok: true, lead: next });
};

export const config = { path: "/.netlify/functions/update-lead" };
