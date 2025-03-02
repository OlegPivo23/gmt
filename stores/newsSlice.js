import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNewsService } from "@/services/newsService";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (_, thunkAPI) => {
    try {
      const res = await getNewsService();
      console.log(res);
      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || err.message);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    selectedNews: null,
    status: "idle",
    error: null,
  },
  reducers: {
    getNews: (state) => state.news,
    selectNews: (state, action) => {
      state.selectedNews = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { getNews, selectNews } = newsSlice.actions;
export default newsSlice.reducer;
