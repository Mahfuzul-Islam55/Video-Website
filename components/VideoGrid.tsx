import React, { Fragment, useEffect } from "react";
import VideoGridItem from "./VideoGridItem";
import { useAppDispatch, useAppSelector } from "@/redux/Store";
import { fetchVideosAsync } from "@/redux/videos/VideosSlice";
import Loading from "./Loading";

const VideoGrid = () => {
  const dispatch = useAppDispatch();
  const { videos, isLoading, isError, error } = useAppSelector(
    (state) => state.videos
  );
  const { tags, search } = useAppSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchVideosAsync({ tags, search }));
  }, [dispatch, tags, search]);

  let content;
  if (isLoading) content = <Loading />;
  else if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  else if (!isLoading && !isError && videos?.length === 0)
    content = <div>No videos found</div>;
  else if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map((video) => (
      <VideoGridItem video={video} key={video.id} />
    ));
  }
  return (
    <Fragment>
      <section className="pt-12">
        <section className="pt-12">
          <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            {/* <!-- single video --> */}

            {content}
            {/* <!-- error section */}
            {/* <div className="col-span-12">some error happened</div> */}
          </div>
        </section>
      </section>
    </Fragment>
  );
};

export default VideoGrid;
