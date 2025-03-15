import axiosR from "../api/http";

export async function getDocumentFileService() {
  const res = await axiosR.get("/document-file-serve");

  return res.data;
}

export async function getDocumentsDirectionService(direction) {
  const res = await axiosR.get("/documents/direction/media", {
    params: { direction },
  });
  return res.data;
}

export async function getAllDocumentsService() {
  const res = await axiosR.get("/documents/get-all");
  console.log(res.data);
  return res.data;
}
