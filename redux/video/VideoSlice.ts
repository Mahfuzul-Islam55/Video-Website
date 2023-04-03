import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo } from "./VideoAPI";

const initialState: IInitialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: "",
};

interface IInitialState {
  video: IVideoType;
  isLoading: boolean;
  isError: boolean;
  error: string | undefined;
}

export interface IVideoType {
  id?: number;
  title?: string;
  description?: string;
  author?: string;
  avator?: string;
  date?: string;
  duration?: string;
  views?: string;
  link?: string;
  thumbnail?: string;
  tags?: string[];
  likes?: number;
  unlikes?: number;
}

export const fetchVideo = createAsyncThunk(
  "video/fetchVideo",
  async (id: number) => {
    const video = await getVideo(id);
    return video;
  }
);

const VideoSlice = createSlice({
  name: "video",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.isLoading = true;
        (state.video = {}), (state.isError = false);
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        (state.video = action.payload), (state.isError = false);
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.isLoading = false;
        (state.video = {}), (state.isError = true);
        state.error = action.error?.message;
      });
  },
});

export default VideoSlice.reducer;
