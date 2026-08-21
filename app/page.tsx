const features = [
  { title: "Discover nearby", text: "Find kitchens, restaurants and hotels serving local delicacies." },
  { title: "Browse local food", text: "Explore meals with photos, descriptions, prices and availability." },
  { title: "Order or visit", text: "Order for delivery or pickup, or choose to visit the provider." },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-black/10 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div>
            <p className="text-xl font-bold">Afri Delicacy</p>
            <p className="text-xs text-black/60">Authentic African food, closer to you.</p>
          </div>
          <div className="flex gap-3 text-sm">
            <a className="rounded-full border px-4 py-2" href="/login">Log in</a>
            <a className="rounded-full bg-black px-4 py-2 text-white" href="/register">Join</a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-700">African local delicacies</p>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">Discover authentic African food near you.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">Find a nearby kitchen, restaurant or hotel, explore its menu, order your meal, or go there yourself.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="rounded-xl bg-black px-6 py-3 text-center font-semibold text-white" href="/explore">Explore food</a>
            <a className="rounded-xl border border-black/15 bg-white px-6 py-3 text-center font-semibold" href="/providers">Find providers</a>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold">{feature.title}</h2>
              <p className="mt-2 leading-7 text-black/60">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
