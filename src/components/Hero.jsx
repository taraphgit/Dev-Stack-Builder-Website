import heroImage from "../assets/hero2.png";

function Hero() {
  return (
    <section
      id="home"
      className="py-12 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Hero Content */}
          <div>
            <p className="text-orange-500 font-semibold mb-3">
              BUILD YOUR PERFECT STACK
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Build Your
              <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Dev Stack
              </span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">
              Explore modern development technologies and build your
              personalized tech stack. Choose the tools that match your
              learning goals and project needs.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#technologies"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white font-semibold hover:opacity-90 transition"
              >
                Explore Technologies
              </a>

              <a
                href="#about"
                className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center">
            <img
              src={heroImage}
              alt="Developer technology stack illustration"
              className="w-full max-w-xl h-auto rounded-3xl object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;