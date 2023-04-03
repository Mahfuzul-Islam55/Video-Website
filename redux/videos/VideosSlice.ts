import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./VideosAPI";

export interface IInitialState {
  videos: String[];
  isLoading: boolean;
  isError: boolean;
  error: string | undefined;
}

const initialState: IInitialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchVideosAsync = createAsyncThunk(
  "videos/fetchVideos",
  async () => {
    const videos = await getVideos();

    return videos;
  }
);

const videoSlice = createSlice({
  name: "videos",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideosAsync.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideosAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideosAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.videos = [];
        state.error = action.error?.message;
      });
  },
});

export default videoSlice.reducer;
