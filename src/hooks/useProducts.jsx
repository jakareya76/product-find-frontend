import { useQuery } from "@tanstack/react-query";
import useApi from "./useApi";

const useProducts = () => {
  const api = useApi();

  const { data: allProducts, refetch } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const res = await api.get("/products");
      return res.data;
    },
  });

  return { allProducts, refetch };
};

export default useProducts;
