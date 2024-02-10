import "./App.css";
import Formulario from "./Componentes/Formulario.jsx";
import React, { useState } from "react";
import Table from "./Componentes/Table.jsx";

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

  const gameScoreList = [
    {
      _id: "1",
      score: 4,
      description: "string",
      game: {
        _id: "1",
        name: "Wordle",
        category: {
          _id: "1",
          name: "Puzzle",
        },
        description: "string",
        url: "string",
        imageURL:
          "https://cdn2.downdetector.com/static/uploads/c/300/e9582/Wordle.png",
        videoURL: "string",
      },
    },
    {
      _id: "2",
      score: 3,
      description: "string",
      game: {
        _id: "2",
        name: "GeoGuessr",
        category: {
          _id: "1",
          name: "Puzzle",
        },
        description: "string",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/GeoGuessr_logo.svg/2560px-GeoGuessr_logo.svg.png",
        imageURL: "string",
        videoURL: "string",
      },
    },
    {
      _id: "3",
      score: 4,
      description: "string",
      game: {
        _id: "3",
        name: "War Brokers",
        category: {
          _id: "2",
          name: "Shooter",
        },
        description: "string",
        url: "https://static.wikia.nocookie.net/war-brokers/images/e/e6/Site-logo.png/revision/latest?cb=20210817173439",
        imageURL: "string",
        videoURL: "string",
      },
    },
    {
      _id: "4",
      score: 5,
      description: "string",
      game: {
        _id: "1",
        name: "Wordle",
        category: {
          _id: "1",
          name: "Puzzle",
        },
        description: "string",
        url: "string",
        imageURL:
          "https://cdn2.downdetector.com/static/uploads/c/300/e9582/Wordle.png",
        videoURL: "string",
      },
    },
  ];

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

      <Table data={gameScoreList} />
    </div>
  );
}

export default App;
