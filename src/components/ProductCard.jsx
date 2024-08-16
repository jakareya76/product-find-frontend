import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { productName, brand, productImage, price, ratings } = product;

  console.log(product);

  return (
    <div className="p-2 border rounded-xl">
      <img
        src={productImage}
        alt={productName}
        className="w-[320px] h-[200px] rounded-xl"
      />
      <div className="flex items-center justify-between">
        <h2 className="my-2 font-semibold">{productName}</h2>
        <h2 className="my-2 font-bold">({brand})</h2>
      </div>
      <div className="flex items-center mb-4 justify-between">
        <h2 className="flex items-center justify-center gap-2">
          <FaStar color="orange" />
          {ratings}
        </h2>
        <h2 className="text-red-500 text-xl font-semibold">${price}</h2>
      </div>
      <button className="btn w-full bg-blue-500 text-white hover:bg-blue-600">
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
