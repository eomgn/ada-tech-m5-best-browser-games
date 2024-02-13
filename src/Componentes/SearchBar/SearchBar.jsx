const SearchBar = (props) => {
  const { searchTerm } = props;
  const { onSearchChange } = props;
  const { onSearchSubmit } = props;

  return (
    <>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={onSearchChange}
      />
      <button onClick={onSearchSubmit}>Buscar</button>
    </>
  );
};

export default SearchBar;
