export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[70vh] flex items-center justify-center text-center px-4 py-10"
      aria-label="Hero"
    >
      
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop')",
        }}
      />
     
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />

      <div className="max-w-3xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-lg">
          Healthy • Tasty • Indian — delivered fast
        </h1>

        <p className="mt-4 text-lg text-gray-200 drop-shadow">
          Fresh home-style meals for busy professionals. Balanced nutrition,
          real ingredients, zero fuss.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#menu"
            className="w-full sm:w-auto bg-black px-5 py-3 rounded-full  text-white border-2 border-basil  transition shadow-lg text-center"
          >
            Explore Menu
          </a>
          <a
            href="#whyus"
            className="w-full sm:w-auto px-5 py-3 rounded-full border-2 border-basil text-white bg-black transition text-center "
          >
            Why SimplyTrueFoods?
          </a>
        </div>

        
        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full bg-yellow-300/80 border border-yellow-500 backdrop-blur-sm">
          <span aria-hidden>🌟</span>
          <span className="font-semibold text-basil">Meal of the Day:</span>
          <span className="text-black">Paneer Tikka Bowl @ ₹199</span>
        </div>
      </div>
    </section>
  );
}
