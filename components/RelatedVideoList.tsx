import React, { Fragment } from "react";
import RelatedVideoListItem from "./RelatedVideoListItem";

interface props {
  currentVideoId?: number;
  tags?: string[];
}
const RelatedVideoList = ({ currentVideoId, tags }: props) => {
  return (
    <Fragment>
      <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
        {/* <!-- single related video --> */}
        <RelatedVideoListItem />
      </div>
    </Fragment>
  );
};

export default RelatedVideoList;
