import ProductCard from "./ProductCard";

const ProductContainer = ({ productTagTitle, data }) => {
  
  // UI
  return (
    <>
      <div className="  px-14 pb-20">
        <h1 className=" uppercase w-full text-2xl font-medium mb-1 text-2xl productTagTitle mb-8 text-center mt-10">
          {productTagTitle}
        </h1>
        <div className="flex items-center flex-wrap justify-center gap-4 gap-y-8  pl-4 mt-2">
          {data.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductContainer;
