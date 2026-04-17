import { NextResponse } from "next/server";
import { createHmac } from "crypto";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { password } = await req.json();
    const expected = process.env.ADMIN_PASSWORD || "carpetcare2026";
    if (!password || password !== expected) {
      return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
    }
    const secret = process.env.ADMIN_PASSWORD || "carpetcare2026";
    const issued = Date.now().toString();
    const token = createHmac("sha256", secret).update(issued).digest("hex") + "." + issued;
    return NextResponse.json({ ok: true, token });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
