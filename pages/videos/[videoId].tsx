import Player from "@/components/Player";
import RelatedVideoList from "@/components/RelatedVideoList";
import VideoDescription from "@/components/VideoDescription";
import { useAppDispatch, useAppSelector } from "@/redux/Store";
import React, { Fragment, useEffect } from "react";
import { fetchVideo } from "../../redux/video/VideoSlice";
import { useRouter } from "next/router";
import Loading from "@/components/Loading";
const Video = () => {
  const dispatch = useAppDispatch();
  const { video, isLoading, isError, error } = useAppSelector(
    (state) => state.video
  );
  const { id, link, title, tags } = video;
  const router = useRouter();
  const routeId = router.query.videoId;
  const videoId = Number(routeId);

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  let content;
  if (isLoading) content = <Loading />;
  else if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  else if (!isLoading && !isError && !video?.id)
    content = <div>No video found</div>;
  else if (!isLoading && !isError && video.id) {
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          <Player link={link} title={title} />
          <VideoDescription video={video} />
        </div>
        <RelatedVideoList currentVideoId={id} tags={tags} />
      </div>
    );
  }
  return (
    <Fragment>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          {content}
        </div>
      </section>
    </Fragment>
  );
};

export default Video;
