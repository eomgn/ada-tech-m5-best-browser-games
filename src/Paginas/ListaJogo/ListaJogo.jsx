import { useState } from "react";
import Table from "../../Componentes/Table/Table.jsx";
import TableContent from "../../Componentes/TableContent/TableContent.jsx";
import SearchSortBar from "../../Componentes/SearchSortBar/SearchSortBar.jsx";
import Dropdown from "../../Componentes/Dropdown/Dropdown.jsx";
import InputBar from "../../Componentes/InputBar/InputBar.jsx";
import { Header } from "../../Componentes/Header/Header.jsx";
import "./styles.css";

const ListaJogo = () => {
  const gameData = [
    {
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
    {
      _id: "2",
      name: "GeoGuessr",
      category: {
        _id: "1",
        name: "Puzzle",
      },
      description: "string",
      url: "string",
      imageURL: "https://logowik.com/content/uploads/images/geoguessr3570.jpg",
      videoURL: "string",
    },
    {
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
  ];

  const categories = [
    { _id: "5", name: "Ação" },
    { _id: "4", name: "Aventura" },
    { _id: "3", name: "Estratégia" },
    { _id: "2", name: "Party" },
    { _id: "1", name: "Puzzle" },
    { _id: "6", name: "Shooter" },
  ];

  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [game, setGame] = useState(gameData);

  function handleChangeCategory(event) {
    setCategory(event.target.value);
  }

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  const filterByCategory = () => {
    return category === ""
      ? game
      : game.filter((game) => game.category.name === category);
  };

  const filterBySearchTerm = (selectedGameByCategory) => {
    return searchTerm === ""
      ? selectedGameByCategory
      : selectedGameByCategory.filter((game) =>
          game.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
  };

  function handleClickSearch() {
    const selectedGameByCategory = filterByCategory();
    const selectedGameByTerm = filterBySearchTerm(selectedGameByCategory);

    setGame(selectedGameByTerm);
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
            <TableContent content={game} />
          </Table>
        </div>
      </div>
    </>
  );
};

export { ListaJogo };
