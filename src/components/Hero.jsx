function Hero() {
  return (
    <section
      id="home"
      className="py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Hero Content */}
          <div>
            <p className="text-orange-500 font-semibold mb-3">
              BUILD YOUR PERFECT STACK
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              Build Your
              <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Dev Stack
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
              Explore modern development technologies and build your
              personalized tech stack. Choose the tools that match your
              learning goals and project needs.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#technologies"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white font-semibold"
              >
                Explore Technologies
              </a>

              <a
                href="#about"
                className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-lg rounded-3xl bg-gradient-to-br from-orange-100 via-pink-100 to-violet-100 p-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-20 rounded-xl bg-orange-100 flex items-center justify-center text-3xl">
                    ⚛️
                  </div>

                  <div className="h-20 rounded-xl bg-pink-100 flex items-center justify-center text-3xl">
                    🟢
                  </div>

                  <div className="h-20 rounded-xl bg-violet-100 flex items-center justify-center text-3xl">
                    🐳
                  </div>

                  <div className="h-20 rounded-xl bg-blue-100 flex items-center justify-center text-3xl">
                    JS
                  </div>

                  <div className="h-20 rounded-xl bg-green-100 flex items-center justify-center text-3xl">
                    DB
                  </div>

                  <div className="h-20 rounded-xl bg-yellow-100 flex items-center justify-center text-3xl">
                    Git
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;