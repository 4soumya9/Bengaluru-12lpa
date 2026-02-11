import React from "react";

const SearchBar = ({ searchText, setSearchText, instock, setInstock }) => {
  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <label>
        Stock only
        <input
          type="checkbox"
          checked={instock}
          onChange={(e) => setInstock(e.target.checked)}
        />
      </label>
    </div>
  );
};

export default SearchBar;
