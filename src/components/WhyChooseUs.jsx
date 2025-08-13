const ITEMS = [
  { icon: "🚚", title: "30-Minute Delivery", desc: "Hyperlocal kitchens for quicker, hotter meals." },
  { icon: "🥗", title: "Clean Ingredients",  desc: "No artificial colors. Cold-pressed oils. Whole grains." },
  { icon: "💸", title: "Budget Friendly",   desc: "Plans starting at ₹99 without compromising on quality." },
 
];

export default function WhyChooseUs() {
  return (
    <section id="whyus" className="bg-kora">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-black text-center">Why Choose Us</h2>
        <p className="text-center text-gray-600 mt-2">Designed for India’s pace — healthy, affordable, reliable.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((it) => (
            <article key={it.title} className="bg-white rounded-xl p-6 shadow-card hover:shadow-lg transition">
              <div className="text-3xl" aria-hidden>{it.icon}</div>
              <h3 className="mt-3 font-semibold text-lg">{it.title}</h3>
              <p className="text-gray-600 mt-1">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
