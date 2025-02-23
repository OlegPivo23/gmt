import axiosR from "../api/http";

export async function getNewsService() {
  const res = await axiosR.get("/news");
  return res.data;
}

export async function createNewsService(news) {
  const res = await axiosR.post("/news/", news);
  return res.data;
}

export async function getCurrentNewsService(id) {
  const res = await axiosR.get(`/news/${id}`);
  return res.data;
}

export async function updateNewsService(id, updatedNews) {
  const res = await axiosR.put(`/news/${id}`, updatedNews);
  return res.data;
}

export async function deleteNewsService(id) {
  const res = await axiosR.delete(`/news/${id}`);
  return res.data;
}
