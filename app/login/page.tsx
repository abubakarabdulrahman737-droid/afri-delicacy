"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setPending(true);

    const formData = new FormData(event.currentTarget);
    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    setPending(false);

    if (result?.error) {
      setError("Invalid email or password.");
      return;
    }

    window.location.href = "/customer";
  }

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-md items-center px-4 py-12">
      <form onSubmit={handleSubmit} className="w-full space-y-5 rounded-2xl border bg-white p-6 shadow-sm">
        <div>
          <p className="text-sm font-semibold text-emerald-700">Afri Delicacy</p>
          <h1 className="mt-1 text-2xl font-bold">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-600">Sign in to continue.</p>
        </div>

        {error ? <p className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p> : null}

        <label className="block text-sm font-medium">
          Email
          <input name="email" type="email" required className="mt-2 w-full rounded-lg border px-3 py-2" />
        </label>

        <label className="block text-sm font-medium">
          Password
          <input name="password" type="password" required minLength={8} className="mt-2 w-full rounded-lg border px-3 py-2" />
        </label>

        <button disabled={pending} className="w-full rounded-lg bg-slate-900 px-4 py-2.5 font-semibold text-white disabled:opacity-50">
          {pending ? "Signing in…" : "Sign in"}
        </button>

        <p className="text-center text-sm text-slate-600">
          New customer? <a href="/register" className="font-semibold text-emerald-700">Create an account</a>
        </p>
      </form>
    </main>
  );
}
