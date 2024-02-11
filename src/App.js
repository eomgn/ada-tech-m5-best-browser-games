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

  const gameData = [
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

  const calculateAverageGameScore = (gameId) => {
    const gameReptition = gameData.filter((game) => game.game._id === gameId);
    const totalScore = gameReptition.reduce(
      (total, entry) => total + entry.score,
      0
    );
    return totalScore / gameReptition.length;
  };

  const uniqueGames = {};

  const filteredGameData = gameData.reduce((accumulator, entry) => {
    if (!uniqueGames[entry.game._id]) {
      uniqueGames[entry.game._id] = true;

      const averageScore = calculateAverageGameScore(entry.game._id);

      accumulator.push({
        _id: entry._id,
        score: entry.score,
        game: {
          _id: entry.game._id,
          name: entry.game.name,
          category: {
            _id: entry.game.category._id,
            name: entry.game.category.name,
          },
          imageURL: entry.game.imageURL,
          averageScore: averageScore,
        },
      });
    }

    return accumulator;
  }, []);

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

      <Table data={filteredGameData} />
    </div>
  );
}

export default App;
