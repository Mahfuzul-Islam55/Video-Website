import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./RelatedVideosAPI";

export interface IInitialState {
  relatedVideos: IRelatedVideoType[];
  isLoading: boolean;
  isError: boolean;
  error: string | undefined;
}

export interface IRelatedVideoType {
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
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: "",
};

interface params {
  tags?: string[];
  id?: number;
}

export const fetchRelatedVideosAsync = createAsyncThunk(
  "relatedVideos/fetchRelatedVideos",
  async ({ tags, id }: params) => {
    const videos = await getRelatedVideos(tags, id);

    return videos;
  }
);

const relatedVideoSlice = createSlice({
  name: "relatedVideos",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideosAsync.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideosAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideosAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.relatedVideos = [];
        state.error = action.error?.message;
      });
  },
});

export default relatedVideoSlice.reducer;
