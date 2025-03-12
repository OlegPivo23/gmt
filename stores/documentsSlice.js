import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllDocuments,
  fetchDocumentFiles,
  fetchDocumentsDirection,
} from "./documentThunks";

const initialState = {
  allDocuments: [],
  documentFiles: [],
  documentsDirection: [],
  status: "idle",
  error: null,
};

const documentsSlice = createSlice({
  name: "documents",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      // Обработка состояний для получения всех документов
      .addCase(fetchAllDocuments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllDocuments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allDocuments = action.payload;
      })
      .addCase(fetchAllDocuments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Обработка состояний для получения файлов документов
      .addCase(fetchDocumentFiles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDocumentFiles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.documentFiles = action.payload;
      })
      .addCase(fetchDocumentFiles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Обработка состояний для получения документов по направлению
      .addCase(fetchDocumentsDirection.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDocumentsDirection.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.documentsDirection = action.payload;
      })
      .addCase(fetchDocumentsDirection.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default documentsSlice.reducer;
