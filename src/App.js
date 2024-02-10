import "./App.css";
import Formulario from "./Componentes/Formulario.jsx";
import SearchSortBar from "./Componentes/SearchSortBar.jsx";
import React, { useState } from "react";

function App() {
  const [formularioData, setFormularioData] = useState({
    name: "",
    email: "",
    password: "",
    date: "",
    country: "",
    estado: "",
  });

  const handleFormularioChange = (newData) => {
    setFormularioData(newData);
  };

  // Lista estática de categorias, o componente CategoryDropdwon está lendo os dados da maneira estruturada abaixo
  const categories = [
    { id: "1", name: "Ação" },
    { id: "2", name: "Aventura" },
    { id: "3", name: "Estratégia" },
    { id: "4", name: "RPG" },
  ];

  const handleSearch = (searchTerm) => {
    console.log("Pesquisar por:", searchTerm);
  };

  const handleCategoryChange = (selectedCategory) => {
    console.log("Categoria selecionada:", selectedCategory);
  };

  return (
    <div className="App">
      <Formulario
        name={formularioData.name}
        email={formularioData.email}
        password={formularioData.password}
        date={formularioData.date}
        country={formularioData.country}
        estado={formularioData.estado}
        onFormularioChange={handleFormularioChange}
      />

      <SearchSortBar
        categories={categories}
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
}

export default App;
