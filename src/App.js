import "./App.css";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./Styles/global";
import { Home } from "./Paginas/Home/Home.jsx";
import { Login } from "./Paginas/Login/Login.jsx";
import { CriarConta } from "./Paginas/CriarConta/CriarConta.jsx";
import { RecuperarSenha } from "./Paginas/RecuperarSenha/RecuperarSenha.jsx";
import { DescricaoJogo } from "./Paginas/DescricaoJogo/DescricaoJogo.jsx";
import { AlteracaoCadastro } from './Paginas/AlteracaoCadastro/AlteracaoCadastro.jsx';
import { ListaJogo } from "./Paginas/ListaJogo/ListaJogo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/criar-conta" element={<CriarConta />} />
          <Route path="/recuperar-senha" element={<RecuperarSenha />} />
          <Route path="/game" element={<ListaJogo />} />
          <Route path="/game/:id" element={<DescricaoJogo />} />
          <Route path="/descricao-jogo" element={<DescricaoJogo />} />
          <Route path="/alteracao-cadastro" element={<AlteracaoCadastro />} />            
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

// import "./App.css";
// import Formulario from "./Componentes/Formulario.jsx";
// import SearchSortBar from "./Componentes/SearchSortBar.jsx";
// import React, { useState } from "react";
// import Table from "./Componentes/Table.jsx";

// function App() {
//   const [formularioData, setFormularioData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     date: "",
//     country: "",
//     estado: "",
//   });

//   const handleFormularioChange = (newData) => {
//     setFormularioData(newData);
//   };

//   // Lista estática de categorias, o componente CategoryDropdwon está lendo os dados da maneira estruturada abaixo
//   const categories = [
//     { id: "1", name: "Ação" },
//     { id: "2", name: "Aventura" },
//     { id: "3", name: "Estratégia" },
//     { id: "4", name: "RPG" },
//   ];

//   const handleSearch = (searchTerm) => {
//     console.log("Pesquisar por:", searchTerm);
//   };

//   const handleCategoryChange = (selectedCategory) => {
//     console.log("Categoria selecionada:", selectedCategory);
//   };

//   const gameData = [
//     {
//       _id: "1",
//       score: 4,
//       description: "string",
//       game: {
//         _id: "1",
//         name: "Wordle",
//         category: {
//           _id: "1",
//           name: "Puzzle",
//         },
//         description: "string",
//         url: "string",
//         imageURL:
//           "https://cdn2.downdetector.com/static/uploads/c/300/e9582/Wordle.png",
//         videoURL: "string",
//       },
//     },
//     {
//       _id: "2",
//       score: 3,
//       description: "string",
//       game: {
//         _id: "2",
//         name: "GeoGuessr",
//         category: {
//           _id: "1",
//           name: "Puzzle",
//         },
//         description: "string",
//         url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/GeoGuessr_logo.svg/2560px-GeoGuessr_logo.svg.png",
//         imageURL: "string",
//         videoURL: "string",
//       },
//     },
//     {
//       _id: "3",
//       score: 4,
//       description: "string",
//       game: {
//         _id: "3",
//         name: "War Brokers",
//         category: {
//           _id: "2",
//           name: "Shooter",
//         },
//         description: "string",
//         url: "https://static.wikia.nocookie.net/war-brokers/images/e/e6/Site-logo.png/revision/latest?cb=20210817173439",
//         imageURL: "string",
//         videoURL: "string",
//       },
//     },
//     {
//       _id: "4",
//       score: 5,
//       description: "string",
//       game: {
//         _id: "1",
//         name: "Wordle",
//         category: {
//           _id: "1",
//           name: "Puzzle",
//         },
//         description: "string",
//         url: "string",
//         imageURL:
//           "https://cdn2.downdetector.com/static/uploads/c/300/e9582/Wordle.png",
//         videoURL: "string",
//       },
//     },
//   ];

//   const calculateAverageGameScore = (gameId) => {
//     const gameReptition = gameData.filter((game) => game.game._id === gameId);
//     const totalScore = gameReptition.reduce(
//       (total, entry) => total + entry.score,
//       0
//     );
//     return totalScore / gameReptition.length;
//   };

//   const uniqueGames = {};

//   const filteredGameData = gameData.reduce((accumulator, entry) => {
//     if (!uniqueGames[entry.game._id]) {
//       uniqueGames[entry.game._id] = true;

//       const averageScore = calculateAverageGameScore(entry.game._id);

//       accumulator.push({
//         _id: entry._id,
//         score: entry.score,
//         game: {
//           _id: entry.game._id,
//           name: entry.game.name,
//           category: {
//             _id: entry.game.category._id,
//             name: entry.game.category.name,
//           },
//           imageURL: entry.game.imageURL,
//           averageScore: averageScore,
//         },
//       });
//     }

//     return accumulator;
//   }, []);

//   return (
//     <div className="App">
//       <Formulario
//         name={formularioData.name}
//         email={formularioData.email}
//         password={formularioData.password}
//         date={formularioData.date}
//         country={formularioData.country}
//         estado={formularioData.estado}
//         onFormularioChange={handleFormularioChange}
//       />

//       <SearchSortBar
//         categories={categories}
//         onSearch={handleSearch}
//         onCategoryChange={handleCategoryChange}
//       />

//       <Table data={filteredGameData} />
//     </div>
//   );
// }

// export default App;
