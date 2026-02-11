import React from "react";

const SearchBar = ({
  searchText,
  setSearchText,
  instockonly,
  setInstockonly,
}) => {
  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <label>
        Stock Only
        <input
          type="checkbox"
          checked={instockonly}
          onChange={(e) => setInstockonly(e.target.checked)}
        />
      </label>
    </div>
  );
};

export default SearchBar;
