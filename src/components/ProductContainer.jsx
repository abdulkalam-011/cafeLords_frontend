import ProductCard from "./ui/ProductCard";

const ProductContainer = ({ productTagTitle, data }) => {
  // UI
  return (
    <>
      <div className="px-3  md:px-14 overflow-y-hidden">
        <h1 className=" uppercase w-full text-2xl font-medium productTagTitle mb-8 text-center mt-10">
          {productTagTitle}
        </h1>
        <div className="flex  overflow-x-auto whitespace-nowrap mt-2">
          <div className="flex gap-2 justify-start items-baseline-last">
            {data.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductContainer;
