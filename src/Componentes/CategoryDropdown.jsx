const CategoryDropdown = (props) => {
  const { options } = props;
  const { selectedCategory } = props;
  const { onCategoryChange } = props;

  return (
    <select value={selectedCategory} onChange={onCategoryChange}>
      <option value="">Selecione uma categoria</option>
      {options.map((option) => (
        <option key={option.id} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default CategoryDropdown;
