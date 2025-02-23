// import axios from "axios";
// import cookie from 'cookiejs';

// const axiosR = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
//     "Access-Control-Allow-Headers": "Content-Type, x-requested-with",
//     "Access-Control-Allow-Credentials": true,
//   },
// });

// axiosR.interceptors.request.use(
//   (config) => {
//     if (cookie.get("token")) {
//       config.headers["Authorization"] = `Bearer ${cookie.get(
//         "token"
//       )}`;
//       config.headers["X-Requested-With"] = `XMLHttpRequest`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axiosR.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.code === "ERR_NETWORK" && window.location.pathname !== "/error") {
//       window.location.href = "/error";
//     }

//     return Promise.reject(error.response);
//   }
// );

// export default axiosR;
