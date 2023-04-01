import React, { Fragment } from "react";
import RelatedVideoListItem from "./RelatedVideoListItem";

const RelatedVideoList = () => {
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
