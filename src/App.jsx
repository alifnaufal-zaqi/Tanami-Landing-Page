import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import { useEffect, useState } from "react";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import SuperioritySection from "./components/SuperioritySection";

const App = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 ${isScroll ? "bg-white shadow-md" : ""}`}
      >
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <SuperioritySection />
        <ProductSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
