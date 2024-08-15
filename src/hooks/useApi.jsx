import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

const useApi = () => {
  return api;
};

export default useApi;
