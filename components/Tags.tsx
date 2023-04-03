import React, { Fragment, useEffect } from "react";
import Tag from "./Tag";
import { useAppDispatch, useAppSelector } from "@/redux/Store";
import { fetchTags } from "@/redux/tags/TagsSlice";

const Tags = () => {
  const dispatch = useAppDispatch();
  const { tags } = useAppSelector((state) => state.tags);

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);
  return (
    <Fragment>
      <section>
        <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
          {tags.length > 0 &&
            tags.map((tag) => {
              return <Tag tag={tag} key={tag.id} />;
            })}
        </div>
      </section>
    </Fragment>
  );
};

export default Tags;
