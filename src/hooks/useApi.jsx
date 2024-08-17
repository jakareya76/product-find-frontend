import axios from "axios";

const api = axios.create({
  baseURL: "https://product-find-api.vercel.app",
});

const useApi = () => {
  return api;
};

export default useApi;
