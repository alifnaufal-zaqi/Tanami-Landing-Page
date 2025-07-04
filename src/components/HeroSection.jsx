import AnimatedContent from "./AnimatedContent/AnimatedContent";

const HeroSection = () => {
  return (
    <section
      className="px-6 md:px-16 lg:px-32 py-16 md:py-24 mb-4 flex flex-col lg:flex-row justify-between items-center gap-10"
      id="HeroSection"
    >
      <AnimatedContent
        direction="horizontal"
        reverse={true}
        delay={0.5}
        duration={3}
      >
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Tanami Pot Organik Yang Dari{" "}
            <span className="text-primary">Serbuk Kayu Dan Ampas Teh</span>
          </h1>
          <p className="text-base md:text-lg mb-6">
            Tanami adalah solusi pot tanaman inovatif yang terbuat dari serbuk
            kayu, ampas kopi, dan ampas teh hasil daur ulang. Dengan desain yang
            kuat namun ramah lingkungan, pot ini tidak hanya mempercantik sudut
            rumah atau taman Anda, tapi juga ikut menjaga bumi. Setelah masa
            pakainya berakhir, Tanami dapat terurai menjadi pupuk alami yang
            menyuburkan tanah, tanpa meninggalkan limbah plastik. Produk ini
            cocok untuk tanaman indoor maupun outdoor, menjadikan hobi bercocok
            tanam Anda lebih praktis, indah, dan bertanggung jawab terhadap
            alam.
          </p>
          <a
            href="#ProductSection"
            className="bg-primary mt-2 md:mt-4 text-white font-semibold px-6 py-3 rounded border-2 border-primary hover:bg-transparent hover:text-black transition-all ease-in-out duration-150 inline-block"
          >
            Jelajahi Produk Kami
          </a>
        </div>
      </AnimatedContent>

      <AnimatedContent direction="horizontal" delay={0.5} duration={3}>
        <div className="w-64 md:w-96 lg:w-[32rem]">
          <img src="/pot-1.svg" alt="Hero Image" className="w-full h-auto" />
        </div>
      </AnimatedContent>
    </section>
  );
};

export default HeroSection;
