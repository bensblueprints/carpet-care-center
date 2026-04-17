import { NextResponse } from "next/server";
import { checkAdminAuth, createLead, listLeads, softDeleteLead, updateLead } from "@/lib/leads-store";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // honeypot — silently succeed without saving
    if (body.website) return NextResponse.json({ ok: true, id: "skip" });
    const { name, email, phone, service, date, message } = body;
    if (!name || !email || !phone || !service) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const lead = createLead({
      name: String(name).slice(0, 200),
      email: String(email).slice(0, 200),
      phone: String(phone).slice(0, 40),
      service: String(service).slice(0, 120),
      date: date ? String(date).slice(0, 40) : undefined,
      message: message ? String(message).slice(0, 4000) : undefined,
    });
    // Best-effort email notification (non-blocking failure)
    try {
      if (process.env.SMTP_HOST && process.env.NOTIFICATION_EMAIL) {
        const nodemailer = await import("nodemailer");
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT || 587),
          secure: false,
          auth: process.env.SMTP_USER
            ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
            : undefined,
        });
        await transporter.sendMail({
          from: process.env.SMTP_FROM || process.env.NOTIFICATION_EMAIL,
          to: process.env.NOTIFICATION_EMAIL,
          subject: `New Lead: ${lead.name} — ${lead.service}`,
          text: `Name: ${lead.name}
Email: ${lead.email}
Phone: ${lead.phone}
Service: ${lead.service}
Preferred date: ${lead.date || "—"}
Message: ${lead.message || "—"}
Submitted: ${lead.createdAt}

View in admin: ${process.env.SITE_URL || ""}/admin`,
        });
      }
    } catch (emailErr) {
      console.error("Lead saved but email notification failed:", emailErr);
    }
    return NextResponse.json({ ok: true, id: lead.id });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  if (!checkAdminAuth(req.headers)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { searchParams } = new URL(req.url);
  const statusFilter = searchParams.get("status") || undefined;
  const leads = listLeads(statusFilter);
  return NextResponse.json({ leads });
}

// Back-compat: admin UI posts PATCH/DELETE to /api/leads with {id} in body
export async function PATCH(req: Request) {
  if (!checkAdminAuth(req.headers)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const { id, ...patch } = body;
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
  const lead = updateLead(id, patch);
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
  const ok = softDeleteLead(id);
  return NextResponse.json({ ok });
}
