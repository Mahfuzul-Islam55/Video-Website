import React, { Fragment } from "react";

const Search = () => {
  return (
    <Fragment>
      <form>
        <input
          className="outline-none border-none mr-2"
          type="search"
          name="search"
          placeholder="Search"
        />
      </form>
    </Fragment>
  );
};

export default Search;
