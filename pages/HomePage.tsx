import Pagination from "@/components/Pagination";
import Tags from "@/components/Tags";
import VideoGrid from "@/components/VideoGrid";
import React, { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <Tags />
      <VideoGrid />
      <Pagination />
    </Fragment>
  );
};

export default HomePage;
