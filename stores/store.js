import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./newsSlice";
import documentsReducer from "./newsSlice";

const store = configureStore({
  reducer: {
    news: newsReducer,
    documents: documentsReducer,
  },
});
export default store;
