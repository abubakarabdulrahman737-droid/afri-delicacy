import { NextResponse } from "next/server";
import { registerCustomer } from "@/lib/auth/registration";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const user = await registerCustomer(body);

    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: "Invalid JSON request." }, { status: 400 });
    }

    if (error instanceof Error && error.message.includes("already exists")) {
      return NextResponse.json({ error: error.message }, { status: 409 });
    }

    return NextResponse.json(
      { error: "Unable to create the account." },
      { status: 400 },
    );
  }
}
