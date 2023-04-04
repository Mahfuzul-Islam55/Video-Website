import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import VideosSlice from "./videos/VideosSlice";
import TagsSlice from "./tags/TagsSlice";
import VideoSlice from "./video/VideoSlice";
import RelatedVideosSlice from "./relatedVideos/RelatedVideosSlice";
import FilterSlice from "./filter/FilterSlice";
export const store = configureStore({
  reducer: {
    videos: VideosSlice,
    tags: TagsSlice,
    video: VideoSlice,
    relatedVideo: RelatedVideosSlice,
    filter: FilterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
