import React, { Fragment } from "react";

interface props {
  likes?: number;
  unlikes?: number;
}
const LikeUnlike = ({ likes, unlikes }: props) => {
  return (
    <Fragment>
      <div className="flex gap-10 w-48">
        <div className="flex gap-1">
          <div className="shrink-0">
            <img className="w-5 block" src="/like.svg" alt="Like" />
          </div>
          <div className="text-sm leading-[1.7142857] text-slate-600">
            {likes}
          </div>
        </div>
        <div className="flex gap-1">
          <div className="shrink-0">
            <img className="w-5 block" src="/unlike.svg" alt="Unlike" />
          </div>
          <div className="text-sm leading-[1.7142857] text-slate-600">
            {unlikes}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LikeUnlike;
