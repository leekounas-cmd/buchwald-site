import { NextResponse } from "next/server";

// Inserts a campaign lead into the Supabase `leads` table via the REST API.
// Uses fetch directly so we don't need the supabase-js package.
// Requires SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (server-only, never NEXT_PUBLIC).

const INSURANCE_VALUES = ["Yes", "No", "Not sure"];

export async function POST(request: Request) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceKey) {
    console.error("[leads] Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
    return NextResponse.json({ error: "Lead capture is not configured" }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim().slice(0, 200) : "";
  const phone = typeof body.phone === "string" ? body.phone.trim().slice(0, 40) : "";
  const email = typeof body.email === "string" ? body.email.trim().slice(0, 200) : "";
  const hasInsurance = typeof body.has_insurance === "string" ? body.has_insurance : "";
  const source = typeof body.source === "string" && body.source.trim() ? body.source.trim().slice(0, 100) : "google";
  const page = typeof body.page === "string" ? body.page.trim().slice(0, 100) : "";

  if (!name || !phone || !email || !page || !INSURANCE_VALUES.includes(hasInsurance)) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  const res = await fetch(`${supabaseUrl}/rest/v1/leads`, {
    method: "POST",
    headers: {
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ name, phone, email, has_insurance: hasInsurance, source, page }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("[leads] Supabase insert failed:", res.status, detail);
    return NextResponse.json({ error: "Could not save lead" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
