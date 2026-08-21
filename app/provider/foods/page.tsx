const foods = [
  ["Tuwo Shinkafa", "₦2,500", "Miyan Kuka", "Available"],
  ["Jollof Rice", "₦3,000", "West African", "Available"],
  ["Pounded Yam + Egusi", "₦3,500", "Nigerian", "Unavailable"],
];

export default function ProviderFoodsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-orange-700">Menu management</p>
          <h1 className="mt-1 text-3xl font-black tracking-tight">My foods</h1>
          <p className="mt-2 text-black/60">Manage the meals customers can discover and order.</p>
        </div>
        <a href="/provider/foods/new" className="rounded-xl bg-black px-5 py-3 text-center text-sm font-semibold text-white">Add food</a>
      </div>

      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
        <div className="hidden grid-cols-[1.5fr_120px_1fr_120px] gap-4 border-b px-5 py-3 text-xs font-bold uppercase tracking-wider text-black/40 sm:grid">
          <span>Food</span><span>Price</span><span>Category</span><span>Status</span>
        </div>
        <div className="divide-y">
          {foods.map(([name, price, category, status]) => (
            <article key={name} className="grid gap-3 p-5 sm:grid-cols-[1.5fr_120px_1fr_120px] sm:items-center sm:gap-4">
              <div><h2 className="font-bold">{name}</h2><p className="mt-1 text-xs text-black/45 sm:hidden">{category}</p></div>
              <span className="font-semibold">{price}</span>
              <span className="text-sm text-black/60">{category}</span>
              <span className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${status === "Available" ? "bg-green-100 text-green-800" : "bg-stone-100 text-black/50"}`}>{status}</span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
