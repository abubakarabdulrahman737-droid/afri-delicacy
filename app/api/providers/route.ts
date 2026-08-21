import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { providerSchema } from "@/lib/validation/provider";

export async function GET() {
  const providers = await db.provider.findMany({
    where: { verificationStatus: "APPROVED" },
    orderBy: { createdAt: "desc" },
    include: { foods: { where: { isAvailable: true }, take: 6 } },
  });

  return NextResponse.json(providers);
}

// Authentication/role enforcement will be connected when Auth.js is added.
// This route deliberately does not accept a client-supplied user ID as proof of identity.
export async function POST(request: Request) {
  const body = await request.json();
  const parsed = providerSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid provider information", details: parsed.error.flatten() }, { status: 400 });
  }

  return NextResponse.json(
    { error: "Provider creation requires an authenticated PROVIDER account." },
    { status: 401 },
  );
}
