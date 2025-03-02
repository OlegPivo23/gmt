import axiosR from "../api/http";

export async function getNewsService() {
  const res = await axiosR.get("/get-by-filter");
  return res.data;
}
