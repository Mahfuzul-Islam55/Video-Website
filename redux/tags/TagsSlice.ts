import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from "./TagsAPI";
const initialState: IInitialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: "",
};

interface IInitialState {
  tags: ITagType[];
  isLoading: boolean;
  isError: boolean;
  error: string | undefined;
}

export interface ITagType {
  id: number;
  title: string;
}

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const response = await getTags();
  return response;
});

const tagSlice = createSlice({
  name: "tags",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.isLoading = true;
        state.tags = [];
        state.isError = false;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
      });
  },
});

export default tagSlice.reducer;
