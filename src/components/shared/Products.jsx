import { useState, useEffect } from "react";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../ProductCard";

const Products = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceRangeFilter, setPriceRangeFilter] = useState([0, Infinity]);
  const [sortOption, setSortOption] = useState("");

  const limit = 9;

  const { allProducts, totalPages, currentPage } = useProducts(
    page,
    limit,
    searchQuery
  );

  const brands = allProducts
    ? [...new Set(allProducts.map((product) => product.brand))]
    : [];
  const categories = allProducts
    ? [...new Set(allProducts.map((product) => product.category))]
    : [];

  const handlePrevious = () => {
    if (currentPage > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setPage(1);
  };

  const handleBrandChange = (e) => {
    setBrandFilter(e.target.value);
    setPage(1);
  };

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
    setPage(1);
  };

  const handlePriceRangeChange = (e) => {
    const range = e.target.value.split("-");
    setPriceRangeFilter([parseFloat(range[0]), parseFloat(range[1])]);
    setPage(1);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const filteredProducts = allProducts
    ?.filter((product) => {
      return (
        (!brandFilter || product.brand === brandFilter) &&
        (!categoryFilter || product.category === categoryFilter) &&
        product.price >= priceRangeFilter[0] &&
        product.price <= priceRangeFilter[1]
      );
    })
    .sort((a, b) => {
      if (sortOption === "price-low-high") {
        return a.price - b.price;
      } else if (sortOption === "price-high-low") {
        return b.price - a.price;
      } else if (sortOption === "date-newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      return 0;
    });

  return (
    <section className="py-20 px-5">
      <div>
        <h2 className="text-center text-xl md:text-3xl font-semibold">
          All Products
        </h2>
        <p className="max-w-xl text-center mx-auto text-gray-500 my-4">
          Find the best products based on your preferences. Use the filters
          below to narrow down your search.
        </p>
      </div>

      {/* Search Input */}
      <div className="flex items-center justify-center mb-8">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full md:w-1/2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Filter and Sort Options */}
      <div className="flex flex-col md:flex-row justify-center gap-5">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {/* Brand Name Filter */}
          <select
            value={brandFilter}
            onChange={handleBrandChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">All Brands</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>

          {/* Category Name Filter */}
          <select
            value={categoryFilter}
            onChange={handleCategoryChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">All Categories</option>
            {categories.map((category, idx) => (
              <option key={idx} value={category}>
                {category}
              </option>
            ))}
          </select>

          {/* Price Range Filter */}
          <select
            value={priceRangeFilter.join("-")}
            onChange={handlePriceRangeChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="0-Infinity">All Prices</option>
            <option value="0-50">Under $50</option>
            <option value="50-100">$50 to $100</option>
            <option value="100-500">$100 to $500</option>
            <option value="500-Infinity">Above $500</option>
          </select>
        </div>

        {/* Sorting Option */}
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4 md:mt-0"
        >
          <option value="">Sort By</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="date-newest">Date Added: Newest First</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="flex items-center justify-center mt-10">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center mt-4 space-x-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>

        <span className="text-gray-700 font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Products;
