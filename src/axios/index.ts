import axios from "axios";
import { getToken } from "@/utils/auth";

const instance = axios.create({
  baseURL: "https://pet-shop.buckhill.com.hr/api/v1",
});

instance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
