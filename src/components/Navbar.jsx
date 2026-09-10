function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 flex items-center justify-center text-white font-bold">
              DS
            </div>

            <h1 className="text-xl font-bold text-gray-800">
              Dev Stack
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="text-gray-600 hover:text-orange-500"
            >
              Home
            </a>

            <a
              href="#technologies"
              className="text-gray-600 hover:text-orange-500"
            >
              Technologies
            </a>

            <a
              href="#projects"
              className="text-gray-600 hover:text-orange-500"
            >
              Projects
            </a>

            <a
              href="#about"
              className="text-gray-600 hover:text-orange-500"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-gray-600 hover:text-orange-500"
            >
              Contact
            </a>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-gray-700">
              Sign In
            </button>

            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden grid grid-cols-3 items-center">

          {/* Hamburger */}
          <div className="flex justify-start">
            <button className="text-gray-700 text-2xl">
              ☰
            </button>
          </div>

          {/* Center Logo */}
          <div className="flex justify-center items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 flex items-center justify-center text-white text-sm font-bold">
              DS
            </div>

            <h1 className="font-bold text-gray-800">
              Dev Stack
            </h1>
          </div>

          {/* Mobile Auth */}
          <div className="flex justify-end items-center gap-2">
            <button className="text-xs text-gray-700">
              Sign In
            </button>

            <button className="text-xs px-2 py-1.5 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white">
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;