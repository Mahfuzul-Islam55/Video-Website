import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { inflateRawSync } from "zlib";

export interface IInitialState {
  tags: string[];
  search: string;
}

const initialState: IInitialState = {
  tags: [],
  search: "",
};

const filterVideoSlice = createSlice({
  name: "filterVideos",
  initialState: initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);
      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterVideoSlice.reducer;
export const { tagRemoved, tagSelected, searched } = filterVideoSlice.actions;
