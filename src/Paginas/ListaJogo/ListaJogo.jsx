import { useState } from "react";
import Table from "../../Componentes/Table/Table.jsx";
import TableContent from "../../Componentes/TableContent/TableContent.jsx";
import SearchSortBar from "../../Componentes/SearchSortBar/SearchSortBar.jsx";
import Dropdown from "../../Componentes/Dropdown/Dropdown.jsx";
import InputBar from "../../Componentes/InputBar/InputBar.jsx";
import { Header } from "../../Componentes/Header/Header.jsx";
import "./styles.css";

const ListaJogo = () => {
  const gameRatingData = [
    {
      _id: "1",
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
          "https://pixelpoppers.com/review/wordle/wordle_hudf386a76d8eded9bc6ac7252d85f5bb9_26477_200x200_resize_catmullrom_2.png",
        videoURL: "string",
      },
      user: {
        name: "string",
        email: "string",
        birthDate: "string",
        country: "string",
        state: "string",
      },
    },
    {
      _id: "2",
      score: 4,
      description: "string",
      game: {
        _id: "2",
        name: "GeoGuessr",
        category: {
          _id: "1",
          name: "Puzzle",
        },
        description: "string",
        url: "string",
        imageURL:
          "https://logowik.com/content/uploads/images/geoguessr3570.jpg",
        videoURL: "string",
      },
      user: {
        name: "string",
        email: "string",
        birthDate: "string",
        country: "string",
        state: "string",
      },
    },
    {
      _id: "3",
      score: 4,
      description: "string",
      game: {
        _id: "3",
        name: "Gartic Phone",
        category: {
          _id: "2",
          name: "Party",
        },
        description: "string",
        url: "string",
        imageURL:
          "https://logos-world.net/wp-content/uploads/2022/04/Gartic-Phone-Logo-700x394.png",
        videoURL: "string",
      },
      user: {
        name: "string",
        email: "string",
        birthDate: "string",
        country: "string",
        state: "string",
      },
    },
    {
      _id: "4",
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
          "https://pixelpoppers.com/review/wordle/wordle_hudf386a76d8eded9bc6ac7252d85f5bb9_26477_200x200_resize_catmullrom_2.png",
        videoURL: "string",
      },
      user: {
        name: "string",
        email: "string",
        birthDate: "string",
        country: "string",
        state: "string",
      },
    },
  ];

  const categories = [
    { _id: "1", name: "Ação" },
    { _id: "2", name: "Aventura" },
    { _id: "3", name: "Estratégia" },
    { _id: "4", name: "Party" },
    { _id: "5", name: "Puzzle" },
    { _id: "6", name: "Shooter" },
  ];

  const calculateAverageGameScore = (gameId) => {
    const sameGame = gameRatingData.filter((game) => game.game._id === gameId);
    const totalGameScore = sameGame.reduce(
      (total, review) => total + review.score,
      0
    );

    return sameGame.length > 0 ? totalGameScore / sameGame.length : 0;
  };

  const uniqueGameEntry = {};

  const uniqueGameData = gameRatingData.reduce((uniqueGameList, game) => {
    if (!uniqueGameEntry[game.game._id]) {
      uniqueGameEntry[game.game._id] = true;

      const averageScore = calculateAverageGameScore(game.game._id);

      uniqueGameList.push({
        _id: game._id,
        score: game.score,
        game: {
          _id: game.game._id,
          name: game.game.name,
          category: {
            _id: game.game.category._id,
            name: game.game.category.name,
          },
          imageURL: game.game.imageURL,
          averageScore: averageScore,
        },
      });
    }

    return uniqueGameList;
  }, []);

  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGame, setFilteredGame] = useState(uniqueGameData);

  function handleChangeCategory(event) {
    setCategory(event.target.value);
  }

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  const filterByCategory = () => {
    return category === ""
      ? uniqueGameData
      : uniqueGameData.filter((game) => game.game.category.name === category);
  };

  const filterBySearchTerm = (selectedGameByCategory) => {
    return searchTerm === ""
      ? selectedGameByCategory
      : selectedGameByCategory.filter((game) =>
          game.game.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
  };

  function handleClickSearch() {
    const selectedGameByCategory = filterByCategory();
    const selectedGameByTerm = filterBySearchTerm(selectedGameByCategory);

    setFilteredGame(selectedGameByTerm);
  }
  return (
    <>
      <Header />
      <div className="lista-jogo-container">
        <div className="barra-de-pesquisa-container">
          <SearchSortBar onClick={handleClickSearch}>
            <InputBar
              type="text"
              searchTerm={searchTerm}
              placeholder="Pesquisar . . ."
              onChange={handleSearchTerm}
            />
            <Dropdown
              value={category}
              onChange={handleChangeCategory}
              options={categories}
            />
          </SearchSortBar>
        </div>
        <div className="tabela-de-jogo-container">
          <Table>
            <TableContent content={filteredGame} />
          </Table>
        </div>
      </div>
    </>
  );
};

export { ListaJogo };
