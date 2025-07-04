import { MdOutlineAllInclusive } from "react-icons/md";
import { GiPlantSeed } from "react-icons/gi";
import { FaRecycle } from "react-icons/fa";

const SuperioritySection = () => {
  return (
    <section className="px-6 md:px-16 lg:px-32 mb-16" id="SuperioritySection">
      <h1 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
        Kelebihan Produk Tanami
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="shadow-lg p-6 rounded-lg text-center hover:shadow-xl transition">
          <MdOutlineAllInclusive
            size={64}
            className="mb-6 mx-auto text-primary"
          />
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Fleksibel</h2>
          <p>
            Dapat digunakan di dalam ruangan maupun di luar ruangan sesuai
            kebutuhan Anda.
          </p>
        </div>

        <div className="shadow-lg p-6 rounded-lg text-center hover:shadow-xl transition">
          <GiPlantSeed size={64} className="mb-6 mx-auto text-primary" />
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Mudah & Bermanfaat
          </h2>
          <p>
            Selain mudah, pot ini dapat digunakan langsung sebagai pupuk untuk
            tanaman Anda karena mudah terurai.
          </p>
        </div>

        <div className="shadow-lg p-6 rounded-lg text-center hover:shadow-xl transition">
          <FaRecycle size={64} className="mb-6 mx-auto text-primary" />
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Ramah Lingkungan
          </h2>
          <p>
            Terbuat dari limbah organik yang didaur ulang, membantu bumi tetap
            hijau.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuperioritySection;
