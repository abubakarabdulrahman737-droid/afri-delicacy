export default function ProviderProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-orange-700">Provider profile</p>
        <h1 className="mt-1 text-3xl font-black tracking-tight">Kitchen information</h1>
        <p className="mt-2 text-black/60">This information helps customers find and contact your business.</p>
      </div>

      <form className="space-y-6 rounded-2xl border bg-white p-6 shadow-sm">
        <section className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold">Business name<input className="rounded-xl border px-4 py-3 font-normal outline-none focus:ring-2" placeholder="e.g. Kano Traditional Kitchen" /></label>
          <label className="grid gap-2 text-sm font-semibold">Business type<select className="rounded-xl border bg-white px-4 py-3 font-normal outline-none focus:ring-2"><option>Kitchen</option><option>Restaurant</option><option>Hotel</option><option>Food vendor</option></select></label>
          <label className="grid gap-2 text-sm font-semibold sm:col-span-2">Description<textarea className="min-h-28 rounded-xl border px-4 py-3 font-normal outline-none focus:ring-2" placeholder="Tell customers about your food and business." /></label>
          <label className="grid gap-2 text-sm font-semibold">Phone<input className="rounded-xl border px-4 py-3 font-normal outline-none focus:ring-2" placeholder="080..." /></label>
          <label className="grid gap-2 text-sm font-semibold">WhatsApp number<input className="rounded-xl border px-4 py-3 font-normal outline-none focus:ring-2" placeholder="080..." /></label>
          <label className="grid gap-2 text-sm font-semibold sm:col-span-2">Address<input className="rounded-xl border px-4 py-3 font-normal outline-none focus:ring-2" placeholder="Street, area, city" /></label>
          <label className="grid gap-2 text-sm font-semibold">Opening time<input type="time" className="rounded-xl border px-4 py-3 font-normal outline-none focus:ring-2" /></label>
          <label className="grid gap-2 text-sm font-semibold">Closing time<input type="time" className="rounded-xl border px-4 py-3 font-normal outline-none focus:ring-2" /></label>
        </section>
        <div className="flex justify-end border-t pt-5"><button type="button" className="rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white">Save profile</button></div>
      </form>
    </div>
  );
}
