import { useAppDispatch, useAppSelector } from "@/redux/Store";
import { searched } from "@/redux/filter/FilterSlice";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";

const Search = () => {
  const { search } = useAppSelector((state) => state.filter);
  const [input, setInput] = useState(search);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(searched(input));
    if (router.asPath !== "/") router.push("/");
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          className="outline-none border-none mr-2"
          type="search"
          name="search"
          placeholder="Search"
          value={input}
          onChange={handleChange}
        />
      </form>
    </Fragment>
  );
};

export default Search;
