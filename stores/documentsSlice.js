import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllDocuments,
  fetchDocumentFiles,
  fetchDocumentsDirection,
} from "./documentsThunks";

const initialState = {
  allDocuments: [],
  documentFiles: [],
  documentsDirection: [],
  currentDirectionDocuments: [],
  status: "idle",
  error: null,
};

const documentsSlice = createSlice({
  name: "documents",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Обработка состояний для получения всех документов
      .addCase(fetchAllDocuments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllDocuments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allDocuments = action.payload;

        // Извлекаем направления для отображения и запроса
        if (state.allDocuments.length > 0) {
          state.documentsDirection = state.allDocuments.map((doc) => ({
            directions_ru: doc.directions_ru,
            directions_en: doc.directions_en,
          }));
        }
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
        state.currentDirectionDocuments = action.payload;
      })

      .addCase(fetchDocumentsDirection.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default documentsSlice.reducer;
