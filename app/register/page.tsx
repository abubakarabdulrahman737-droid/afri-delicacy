"use client";

import { FormEvent, useState } from "react";

export default function RegisterPage() {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setPending(true);

    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        phone: form.get("phone") || undefined,
        whatsappNumber: form.get("whatsappNumber") || undefined,
        password: form.get("password"),
      }),
    });

    const data = await response.json();
    setPending(false);

    if (!response.ok) {
      setError(data.error ?? "Unable to create the account.");
      return;
    }

    setSuccess(true);
  }

  if (success) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-md items-center px-4 py-12">
        <div className="w-full rounded-2xl border bg-white p-6 text-center shadow-sm">
          <h1 className="text-2xl font-bold">Account created</h1>
          <p className="mt-2 text-sm text-slate-600">Your customer account is ready. You can now sign in.</p>
          <a href="/login" className="mt-5 inline-block rounded-lg bg-slate-900 px-5 py-2.5 font-semibold text-white">Sign in</a>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-md items-center px-4 py-12">
      <form onSubmit={handleSubmit} className="w-full space-y-5 rounded-2xl border bg-white p-6 shadow-sm">
        <div>
          <p className="text-sm font-semibold text-emerald-700">Afri Delicacy</p>
          <h1 className="mt-1 text-2xl font-bold">Create your account</h1>
          <p className="mt-2 text-sm text-slate-600">Start discovering local delicacies near you.</p>
        </div>

        {error ? <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p> : null}

        <label className="block text-sm font-medium">Full name<input name="name" required minLength={2} className="mt-2 w-full rounded-lg border px-3 py-2" /></label>
        <label className="block text-sm font-medium">Email<input name="email" type="email" required className="mt-2 w-full rounded-lg border px-3 py-2" /></label>
        <label className="block text-sm font-medium">Phone<input name="phone" type="tel" className="mt-2 w-full rounded-lg border px-3 py-2" /></label>
        <label className="block text-sm font-medium">WhatsApp number<input name="whatsappNumber" type="tel" className="mt-2 w-full rounded-lg border px-3 py-2" /></label>
        <label className="block text-sm font-medium">Password<input name="password" type="password" required minLength={8} className="mt-2 w-full rounded-lg border px-3 py-2" /></label>

        <button disabled={pending} className="w-full rounded-lg bg-slate-900 px-4 py-2.5 font-semibold text-white disabled:opacity-50">
          {pending ? "Creating account…" : "Create account"}
        </button>

        <p className="text-center text-sm text-slate-600">Already registered? <a href="/login" className="font-semibold text-emerald-700">Sign in</a></p>
      </form>
    </main>
  );
}
