export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-purple-900 via-black to-purple-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold text-lg">SimplyTrueFoods</h4>
          <p className="text-white/80 mt-2">
            Healthy Indian meals for today’s professionals.
          </p>
        </div>
        <div>
          <h5 className="font-semibold">Contact</h5>
          <p className="text-white/80 mt-2">support@simplytruefoods.in</p>
          <p className="text-white/80">+91 98xx-xx-xxxx</p>
        </div>
        <div>
          <h5 className="font-semibold">Timings</h5>
          <p className="text-white/80 mt-2">Mon-Sun • 8am – 11pm</p>
        </div>
        <div>
          <h5 className="font-semibold">Social</h5>
          <ul className="mt-2 space-y-1">
            {["Instagram", "X", "LinkedIn"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-white/80 hover:text-pink-400 transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 text-sm text-center text-white/60">
          © {new Date().getFullYear()} SimplyTrueFoods. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
