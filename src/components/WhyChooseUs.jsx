const ITEMS = [
  { icon: "🚚", title: "30-Minute Delivery", desc: "Hyperlocal kitchens for quicker, hotter meals." },
  { icon: "🥗", title: "Clean Ingredients", desc: "No artificial colors. Cold-pressed oils. Whole grains." },
  { icon: "💸", title: "Budget Friendly", desc: "Plans starting at ₹99 without compromising on quality." },
];

export default function WhyChooseUs() {
  return (
    <section
      id="whyus"
      className="bg-gradient-to-b from-black via-purple-900 to-black py-16"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-400 text-center drop-shadow-lg">
          Why Choose Us
        </h2>
        <p className="text-center text-gray-300 mt-2">
          Designed for India’s pace — healthy, affordable, reliable.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((it) => (
            <article
              key={it.title}
              className="bg-purple-950/40 border border-purple-500 rounded-xl p-6 shadow-lg hover:shadow-purple-500/40 transition transform hover:scale-105"
            >
              <div className="text-4xl" aria-hidden>
                {it.icon}
              </div>
              <h3 className="mt-3 font-semibold text-lg text-purple-300">
                {it.title}
              </h3>
              <p className="text-gray-300 mt-1">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
