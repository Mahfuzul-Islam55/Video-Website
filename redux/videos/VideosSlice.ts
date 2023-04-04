import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./VideosAPI";

export interface IInitialState {
  videos: IVideoType[];
  isLoading: boolean;
  isError: boolean;
  error: string | undefined;
}

export interface IVideoType {
  id: number;
  title: string;
  description: string;
  author: string;
  avator: string;
  date: string;
  duration: string;
  views: string;
  link: string;
  thumbnail: string;
  tags: string[];
  likes: number;
  unlikes: number;
}
const initialState: IInitialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

interface params {
  tags: string[];
  search: string;
}
export const fetchVideosAsync = createAsyncThunk(
  "videos/fetchVideos",
  async ({ tags = [], search = "" }: params) => {
    const videos = await getVideos(tags, search);

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
