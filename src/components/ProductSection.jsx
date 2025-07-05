import products from "../utils/data";
import AnimatedContent from "./AnimatedContent/AnimatedContent";
import { FaCartShopping } from "react-icons/fa6";

const ProductSection = () => {
  const handleClikOrder = () => {
    window.location.href = "https://wa.me/6285156511689";
  };

  return (
    <section
      id="ProductSection"
      className="bg-primary px-6 md:px-16 lg:px-32 py-12"
    >
      <AnimatedContent duration={1.5}>
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white text-center font-semibold">
          Produk Kami
        </h1>
      </AnimatedContent>

      <div className="flex flex-wrap justify-center gap-10 my-10">
        {products.map((product, index) => (
          <AnimatedContent key={index} duration={1.5}>
            <div className="bg-white w-lg md:w-xl lg:w-2xl rounded-xl p-6 flex flex-col h-full">
              <div className="w-full h-64 md:h-72 lg:h-80">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="mt-6 flex flex-col flex-grow">
                <h2 className="text-2xl md:text-3xl mb-4 font-semibold">
                  {product.name}
                </h2>
                <p className="text-base md:text-lg font-light flex-grow">
                  {product.description}
                </p>
                <button
                  onClick={handleClikOrder}
                  className="bg-primary flex items-center gap-3 justify-center w-full mt-6 p-3 text-lg md:text-xl rounded-md text-white cursor-pointer border-2 border-primary hover:bg-transparent hover:text-black transition-all ease-in-out duration-150"
                >
                  <FaCartShopping />
                  Pesan
                </button>
              </div>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
