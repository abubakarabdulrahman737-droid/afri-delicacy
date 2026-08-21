import Link from "next/link";

const navigation = [
  ["Dashboard", "/provider"],
  ["My profile", "/provider/profile"],
  ["My foods", "/provider/foods"],
  ["Orders", "/provider/orders"],
  ["Messages", "/provider/messages"],
  ["Reviews", "/provider/reviews"],
];

export default function ProviderLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/" className="font-black tracking-tight">Afri Delicacy</Link>
          <Link href="/" className="text-sm text-black/60 hover:text-black">View marketplace</Link>
        </div>
      </header>
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-6 lg:grid-cols-[230px_1fr]">
        <aside className="rounded-2xl border bg-white p-3 shadow-sm">
          <p className="px-3 pb-3 text-xs font-bold uppercase tracking-wider text-black/40">Provider portal</p>
          <nav className="grid gap-1">
            {navigation.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-stone-100">
                {label}
              </Link>
            ))}
          </nav>
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
