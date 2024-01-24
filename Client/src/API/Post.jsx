import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
});
axiosInstance.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/*",
    },
  };
});
axiosInstance.interceptors.response.use(
  (response) => {
    // console.log(response.status);
    if (response && response.data) {
      return response.data;
    } else {
      return response;
    }
  },
  (err) => {
    const config = err?.config;
    if (err?.response?.status === 401 && !config?.sent) {
      console.log("conf refresh--------------------");
    }
    if (err?.response?.status === 403) {
      console.log("forbidden");
    }
    if (!err.response) {
      console.log("Err! Network err!");
    }
    throw err;
  }
);
export default axiosInstance;
