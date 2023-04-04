import { IRelatedVideoType } from "@/redux/relatedVideos/RelatedVideosSlice";
import Link from "next/link";
import React, { Fragment } from "react";

interface props {
  relatedVideo: IRelatedVideoType;
}
const RelatedVideoListItem = ({ relatedVideo }: props) => {
  const { id, title, duration, author, thumbnail, views, date } = relatedVideo;
  return (
    <Fragment>
      <div className="w-full flex flex-row gap-2 mb-4">
        <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
          <Link href={`/videos/${id}`}>
            <img src={thumbnail} className="object-cover" alt={title} />
          </Link>

          <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
            {duration}
          </p>
        </div>

        <div className="flex flex-col w-full">
          <Link href={`/videos/${id}`}>
            <p className="text-slate-900 text-sm font-semibold">{title}</p>
          </Link>
          <a
            className="text-gray-400 text-xs mt-2 hover:text-gray-600"
            href="#"
          >
            {author}
          </a>
          <p className="text-gray-400 text-xs mt-1">
            {views} views . {date}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default RelatedVideoListItem;
