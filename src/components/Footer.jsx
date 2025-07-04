import { FaInstagram, FaPhone, FaRegEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-32 py-8 bg-primary">
      <div className="flex flex-col items-center gap-4 mb-6">
        <img
          src="/Logo-2.svg"
          className="object-cover object-center h-20 md:h-24"
          width={200}
          alt="Footer Image"
        />
        <p className="text-center text-lg md:text-xl font-semibold text-white">
          Pot Organik Solusi Hidupkan Bumi
        </p>
      </div>
      <div className="flex gap-4 justify-center mt-4">
        <button className="p-3 md:p-4 border-2 rounded-full text-white cursor-pointer hover:bg-white hover:text-primary transition">
          <FaInstagram size={20} className="md:size-5" />
        </button>
        <button className="p-3 md:p-4 border-2 rounded-full text-white cursor-pointer hover:bg-white hover:text-primary transition">
          <FaRegEnvelope size={20} className="md:size-5" />
        </button>
        <button className="p-3 md:p-4 border-2 rounded-full text-white cursor-pointer hover:bg-white hover:text-primary transition">
          <FaPhone size={20} className="md:size-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
