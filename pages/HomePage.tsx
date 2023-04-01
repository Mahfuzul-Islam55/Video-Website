import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Pagination from "@/components/Pagination";
import Tags from "@/components/Tags";
import VideoGrid from "@/components/VideoGrid";
import React, { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <Navbar />
      <Tags />
      <VideoGrid />
      <Pagination />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
