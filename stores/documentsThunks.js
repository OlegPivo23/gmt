import {
  getAllDocumentsService,
  getDocumentFileService,
  getDocumentsDirectionService,
} from "@/services/fileService";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Асинхронное действие для получения всех документов
export const fetchAllDocuments = createAsyncThunk(
  "documents/fetchAllDocuments",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getAllDocumentsService();
      return res;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// Асинхронное действие для получения файлов документов
export const fetchDocumentFiles = createAsyncThunk(
  "documents/fetchDocumentFiles",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getDocumentFileService();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const fetchDocumentsDirection = createAsyncThunk(
  "documents/fetchDocumentsDirection",
  async (direction, { rejectWithValue }) => {
    try {
      const res = await getDocumentsDirectionService(direction);
      return res;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
