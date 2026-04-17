import { NextResponse } from "next/server";
import { checkAdminAuth, createLead, listLeads, softDeleteLead, updateLead } from "@/lib/leads-store";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // honeypot
    if (body.website) return NextResponse.json({ ok: true, id: "skip" });
    const { name, email, phone, service, date, message } = body;
    if (!name || !email || !phone || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const lead = await createLead({
      name: String(name).slice(0, 200),
      email: String(email).slice(0, 200),
      phone: String(phone).slice(0, 40),
      service: String(service).slice(0, 120),
      date: date ? String(date).slice(0, 40) : undefined,
      message: message ? String(message).slice(0, 4000) : undefined,
    });
    return NextResponse.json({ ok: true, id: lead.id });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  if (!checkAdminAuth(req.headers)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { searchParams } = new URL(req.url);
  const statusFilter = searchParams.get("status");
  let leads = await listLeads();
  if (statusFilter) leads = leads.filter((l) => l.status === statusFilter);
  return NextResponse.json({ leads });
}

export async function PATCH(req: Request) {
  if (!checkAdminAuth(req.headers)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const { id, ...patch } = body;
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
  const lead = await updateLead(id, patch);
  if (!lead) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ ok: true, lead });
}

export async function DELETE(req: Request) {
  if (!checkAdminAuth(req.headers)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const { id } = body;
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
  const ok = await softDeleteLead(id);
  return NextResponse.json({ ok });
}
