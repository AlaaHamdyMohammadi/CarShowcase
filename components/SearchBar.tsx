"use client";

import React from "react";
import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
    const [manufacturer, setManufacturer] = React.useState("");
  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className="searchbar">
      <div className="search__item">
        <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
      </div>
    </form>
  );
};

export default SearchBar;
