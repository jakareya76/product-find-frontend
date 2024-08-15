import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";

const HomePage = () => {
  const { allProducts } = useProducts();

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <section className="py-20 px-5">
        <div>
          <h2 className="text-center text-xl md:text-3xl font-semibold">
            All Products
          </h2>
          <p className="max-w-xl text-center mx-auto text-gray-500 my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem nihil id perspiciatis quaerat repellat. Dignissimos
            repellat vero
          </p>
        </div>
        {/* TODO: make filtering here */}

        <div className="flex items-center justify-center">
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {allProducts?.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
