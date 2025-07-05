import { useState } from "react";
import {
  FaPaperPlane,
  FaInstagram,
  FaPhone,
  FaRegEnvelope,
} from "react-icons/fa6";

const ContactSection = () => {
  const [sendMessage, setSendMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSendMessage({ ...sendMessage, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappNumber = "6285156511689";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      `Hallo, saya ${sendMessage.name}. ${sendMessage.message}`
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section
      className="px-6 md:px-16 lg:px-32 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10"
      id="ContactSection"
    >
      <div className="shadow-md rounded-md p-6 md:p-8 lg:col-span-2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 md:mb-12">
          Kontak Kami
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="text-lg md:text-xl mb-1">
              Nama
            </label>
            <input
              type="text"
              name="name"
              className="border-2 border-gray-300 p-3 md:p-4 rounded-md"
              placeholder="Isikan nama anda"
              value={sendMessage.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-lg md:text-xl mb-1">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="border-2 border-gray-300 p-3 md:p-4 rounded-md"
              placeholder="Isikan email anda"
              value={sendMessage.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="message" className="text-lg md:text-xl mb-1">
              Pesan
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Isikan pesan yang ingin disampaikan"
              className="border-2 border-gray-300 p-3 md:p-4 rounded-md h-32 resize-none"
              value={sendMessage.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="p-3 md:p-4 flex items-center justify-center gap-3 md:gap-4 text-base md:text-lg bg-primary rounded-md text-white w-full cursor-pointer border-2 border-primary hover:bg-transparent hover:text-black transition-all ease-in-out duration-150"
          >
            <FaPaperPlane />
            Kirim Pesan
          </button>
        </form>
      </div>

      <div className="shadow-md p-6 md:p-8 rounded-md">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 md:mb-12">
          Sosial Media
        </h1>
        <ul className="text-base md:text-xl flex flex-col gap-6 md:gap-8 mb-6 md:mb-8">
          <li className="flex items-center gap-3 md:gap-4">
            <FaRegEnvelope />
            <p>tanamipotorganik@gmail.com</p>
          </li>
          <li className="flex items-center gap-3 md:gap-4">
            <FaInstagram />
            <p>Tanami_Pot_Organik</p>
          </li>
          <li className="flex items-center gap-3 md:gap-4">
            <FaPhone />
            <p>+6285156511689</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
