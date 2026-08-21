const stats = [
  ["Pending orders", "8"],
  ["Preparing", "5"],
  ["Ready", "3"],
  ["Completed today", "21"],
];

const orders = [
  ["#AD1023", "Tuwo Shinkafa + Miyan Kuka", "₦5,000", "Preparing"],
  ["#AD1022", "Jollof Rice + Chicken", "₦4,500", "Pending"],
  ["#AD1021", "Pounded Yam + Egusi", "₦6,000", "Ready"],
];

export default function ProviderDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-orange-700">Provider dashboard</p>
        <h1 className="mt-1 text-3xl font-black tracking-tight">Good morning, Chef.</h1>
        <p className="mt-2 text-black/60">Manage your kitchen, menu and customer orders from one place.</p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(([label, value]) => (
          <article key={label} className="rounded-2xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-black/50">{label}</p>
            <p className="mt-2 text-3xl font-black">{value}</p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border bg-white shadow-sm">
        <div className="flex items-center justify-between border-b p-5">
          <div>
            <h2 className="font-bold">Recent orders</h2>
            <p className="mt-1 text-sm text-black/50">Your latest customer activity.</p>
          </div>
          <a href="/provider/orders" className="text-sm font-semibold text-orange-700">View all</a>
        </div>
        <div className="divide-y">
          {orders.map(([number, meal, amount, status]) => (
            <div key={number} className="grid gap-2 p-5 sm:grid-cols-[110px_1fr_100px_100px] sm:items-center">
              <span className="font-semibold">{number}</span>
              <span className="text-sm text-black/70">{meal}</span>
              <span className="font-semibold">{amount}</span>
              <span className="w-fit rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold">{status}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <a href="/provider/foods/new" className="rounded-2xl bg-black p-6 text-white hover:bg-black/90">
          <p className="text-lg font-bold">Add a new meal</p>
          <p className="mt-2 text-sm text-white/65">Add a local delicacy, price, photo and availability.</p>
        </a>
        <a href="/provider/profile" className="rounded-2xl border bg-white p-6 hover:bg-stone-50">
          <p className="text-lg font-bold">Complete your provider profile</p>
          <p className="mt-2 text-sm text-black/55">Add your location, phone, WhatsApp and opening hours.</p>
        </a>
      </section>
    </div>
  );
}
