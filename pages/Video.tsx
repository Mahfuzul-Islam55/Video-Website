import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Player from "@/components/Player";
import RelatedVideoList from "@/components/RelatedVideoList";
import VideoDescription from "@/components/VideoDescription";
import React, { Fragment } from "react";

const Video = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              <Player />
              <VideoDescription />
            </div>
            <RelatedVideoList />
          </div>
        </div>
      </section>
      <Footer></Footer>
    </Fragment>
  );
};

export default Video;
