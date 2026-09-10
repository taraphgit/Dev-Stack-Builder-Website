function Footer() {
  return (
    <footer className="mt-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 flex items-center justify-center font-bold">
                DS
              </div>

              <h2 className="text-xl font-bold">
                Dev Stack
              </h2>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Build your perfect developer stack with modern
              technologies and tools.
            </p>

            <div className="flex gap-4 mt-5">
              <a href="#" className="text-gray-400 hover:text-white">
                GitHub
              </a>

              <a href="#" className="text-gray-400 hover:text-white">
                Twitter
              </a>

              <a href="#" className="text-gray-400 hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Product
            </h3>

            <div className="space-y-3 text-gray-400">
              <a href="#technologies" className="block hover:text-white">
                Technologies
              </a>

              <a href="#projects" className="block hover:text-white">
                Projects
              </a>

              <a href="#about" className="block hover:text-white">
                About
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Company
            </h3>

            <div className="space-y-3 text-gray-400">
              <a href="#about" className="block hover:text-white">
                About Us
              </a>

              <a href="#contact" className="block hover:text-white">
                Contact
              </a>

              <a href="#" className="block hover:text-white">
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Legal
            </h3>

            <div className="space-y-3 text-gray-400">
              <a href="#" className="block hover:text-white">
                Privacy Policy
              </a>

              <a href="#" className="block hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © 2026 Dev Stack Builder. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
