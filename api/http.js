import axios from "axios";

const axiosR = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

export default axiosR;
