import React, { useState } from "react";
import SearchBar from "./SearchBar";
import CategoryDropdown from "./CategoryDropdown";

const SearchSortBar = (props) => {
  const { categories } = props;
  const { onSearch } = props;
  const { onCategoryChange } = props;

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    onSearch(searchTerm);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    onCategoryChange(event.target.value);
  };

  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
      />

      <CategoryDropdown
        options={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <button onClick={handleSearchSubmit}>Pesquisar</button>
    </div>
  );
};

export default SearchSortBar;
