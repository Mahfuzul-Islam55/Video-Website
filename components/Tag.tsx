import { ITagType } from "@/redux/tags/TagsSlice";
import React, { Fragment } from "react";

interface props {
  tag: ITagType;
}
const Tag = ({ tag }: props) => {
  return (
    <Fragment>
      <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
        {tag.title}
      </div>
    </Fragment>
  );
};

export default Tag;
