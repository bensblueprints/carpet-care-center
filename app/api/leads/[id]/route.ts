import { NextResponse } from "next/server";
import { checkAdminAuth, softDeleteLead, updateLead } from "@/lib/leads-store";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  if (!checkAdminAuth(req.headers)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const patch = await req.json().catch(() => ({}));
  const lead = updateLead(params.id, patch);
  if (!lead) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ ok: true, lead });
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  if (!checkAdminAuth(req.headers)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const ok = softDeleteLead(params.id);
  return NextResponse.json({ ok });
}
