import { useQuery } from "@tanstack/react-query";
import useApi from "./useApi";

const useProducts = (page = 1, limit = 10, searchQuery = "") => {
  const api = useApi();

  const { data, refetch } = useQuery({
    queryKey: ["products", page, limit, searchQuery],
    queryFn: async () => {
      const res = await api.get(
        `/products?page=${page}&limit=${limit}&search=${searchQuery}`
      );
      return res.data;
    },
  });

  const allProducts = data?.products;
  const totalPages = data?.totalPages;
  const currentPage = data?.currentPage;

  return { allProducts, totalPages, currentPage, refetch };
};

export default useProducts;
