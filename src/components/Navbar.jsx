import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import AnimatedContent from "./AnimatedContent/AnimatedContent";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="px-6 md:px-16 lg:px-32 py-6 md:py-8 h-20 md:h-32 flex justify-between items-center relative z-50">
      {/* Logo */}
      <div>
        <img src="/Logo..svg" alt="Logo" className="w-32 md:w-48" />
      </div>

      {/* Menu Desktop */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-10">
        <li className="text-lg lg:text-xl cursor-pointer rounded-full p-2 hover:bg-primary hover:text-white transition-all duration-150">
          <AnimatedContent>
            <a href="#HeroSection">Beranda</a>
          </AnimatedContent>
        </li>
        <li className="text-lg lg:text-xl cursor-pointer rounded-full p-2 hover:bg-primary hover:text-white transition-all duration-150">
          <AnimatedContent>
            <a href="#SuperioritySection">Kelebihan</a>
          </AnimatedContent>
        </li>
        <li className="text-lg lg:text-xl cursor-pointer rounded-full p-2 hover:bg-primary hover:text-white transition-all duration-150">
          <AnimatedContent>
            <a href="#ProductSection">Produk</a>
          </AnimatedContent>
        </li>
        <li className="text-lg lg:text-xl cursor-pointer rounded-full p-2 hover:bg-primary hover:text-white transition-all duration-150">
          <AnimatedContent>
            <a href="#ContactSection">Kontak</a>
          </AnimatedContent>
        </li>
      </ul>

      {/* Hamburger Button */}
      <button
        className="md:hidden cursor-pointer text-2xl text-black z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 z-40">
          <a
            href="#HeroSection"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg hover:text-primary"
          >
            Beranda
          </a>
          <a
            href="#SuperioritySection"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg hover:text-primary"
          >
            Kelebihan
          </a>
          <a
            href="#ProductSection"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg hover:text-primary"
          >
            Produk
          </a>
          <a
            href="#ContactSection"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg hover:text-primary"
          >
            Kontak
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
