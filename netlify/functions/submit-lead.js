// Netlify function mirror — uses @netlify/blobs when deployed to Netlify.
// For Coolify deployments, the /api/leads Next.js route is the primary handler.
import { getStore } from "@netlify/blobs";
import { randomUUID } from "crypto";

export default async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });
  const body = await req.json().catch(() => ({}));
  if (body.website) return Response.json({ ok: true, id: "skip" });
  const { name, email, phone, service, date, message } = body;
  if (!name || !email || !phone || !service) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }
  const store = getStore("leads");
  const id = randomUUID();
  const lead = {
    id,
    createdAt: new Date().toISOString(),
    status: "new",
    name: String(name).slice(0, 200),
    email: String(email).slice(0, 200),
    phone: String(phone).slice(0, 40),
    service: String(service).slice(0, 120),
    date: date ? String(date).slice(0, 40) : undefined,
    message: message ? String(message).slice(0, 4000) : undefined,
  };
  await store.setJSON(`${id}.json`, lead);
  return Response.json({ ok: true, id });
};

export const config = { path: "/.netlify/functions/submit-lead" };
