import axios from "axios";

const axiosR = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
    "Access-Control-Allow-Headers": "Content-Type, x-requested-with",
    "Access-Control-Allow-Credentials": true,
  },
});

export default axiosR;
