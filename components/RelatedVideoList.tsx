import React, { Fragment, useEffect } from "react";
import RelatedVideoListItem from "./RelatedVideoListItem";
import { useAppDispatch, useAppSelector } from "@/redux/Store";
import {
  IRelatedVideoType,
  fetchRelatedVideosAsync,
} from "@/redux/relatedVideos/RelatedVideosSlice";
import Loading from "./Loading";

interface props {
  currentVideoId?: number;
  tags?: string[];
}
const RelatedVideoList = ({ currentVideoId, tags }: props) => {
  const dispatch = useAppDispatch();
  const { relatedVideos, isLoading, isError, error } = useAppSelector(
    (state) => state.relatedVideo
  );
  console.log(relatedVideos);

  useEffect(() => {
    dispatch(fetchRelatedVideosAsync({ tags, id: currentVideoId }));
  }, [dispatch, tags, currentVideoId]);

  let content;
  if (isLoading) content = <Loading />;
  else if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  else if (!isLoading && !isError && relatedVideos?.length === 0)
    content = <div>No videos found</div>;
  else if (!isLoading && !isError && relatedVideos?.length > 0) {
    content = relatedVideos.map((relatedVideo: IRelatedVideoType) => (
      <RelatedVideoListItem relatedVideo={relatedVideo} key={relatedVideo.id} />
    ));
  }

  return (
    <Fragment>
      <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
        {/* <!-- single related video --> */}
        {content}
      </div>
    </Fragment>
  );
};

export default RelatedVideoList;
