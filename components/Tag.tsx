import { useAppDispatch, useAppSelector } from "@/redux/Store";
import { tagRemoved, tagSelected } from "@/redux/filter/FilterSlice";
import { ITagType } from "@/redux/tags/TagsSlice";
import React, { Fragment } from "react";

interface props {
  tag: ITagType;
}
const Tag = ({ tag }: props) => {
  const dispatch = useAppDispatch();
  const { tags } = useAppSelector((state) => state.filter);
  const isSelected = tags.includes(tag.title) ? true : false;
  const style = isSelected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";
  const selectedHandle = () => {
    if (isSelected) dispatch(tagRemoved(tag.title));
    else dispatch(tagSelected(tag.title));
  };
  return (
    <Fragment>
      <div onClick={selectedHandle} className={style}>
        {tag.title}
      </div>
    </Fragment>
  );
};

export default Tag;
