export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[70vh] flex items-center justify-center text-center px-4 py-10"
      aria-label="Hero"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-white/50" />

      <div className="max-w-3xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-basil">
          Healthy • Tasty • Indian — delivered fast
        </h1>

        <p className="mt-4 text-lg text-pista">
          Fresh home-style meals for busy professionals. Balanced nutrition,
          real ingredients, zero fuss.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#menu"
            className="w-full sm:w-auto px-5 py-3 rounded-full bg-black text-white hover:bg-basil transition shadow-card text-center"
          >
            Explore Menu
          </a>
          <a
            href="#why"
            className="w-full sm:w-auto px-5 py-3 rounded-full border-2 border-basil text-basil hover:bg-pista transition text-center"
          >
            Why SimplyTrueFoods?
          </a>
        </div>

        {/* Meal of the Day */}
        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full bg-haldi/60 border border-kesar">
          <span aria-hidden>🌟</span>
          <span className="font-semibold text-basil">Meal of the Day:</span>
          <span className="text-black">Paneer Tikka Bowl @ ₹199</span>
        </div>
      </div>
    </section>
  );
}
