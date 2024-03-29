import { useState, useEffect } from "react";
import Table from "../../Componentes/Table/Table.jsx";
import TableContent from "../../Componentes/TableContent/TableContent.jsx";
import SearchSortBar from "../../Componentes/SearchSortBar/SearchSortBar.jsx";
import Dropdown from "../../Componentes/Dropdown/Dropdown.jsx";
import InputBar from "../../Componentes/InputBar/InputBar.jsx";
import { Header } from "../../Componentes/Header/Header.jsx";
import "./styles.css";

const Recomendacao = () => {
  const [gameData, setGameData] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userId = sessionStorage.getItem("user_id");
      const token = sessionStorage.getItem("accessToken");

      console.log(userId);
      console.log(token);

      const requestRecomendations = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const requestCategory = {
        method: "GET",
      };

      try {
        const [gamesResponse, categoriesResponse] = await Promise.all([
          fetch(
            `https://api-best-browser-games.vercel.app/users/${userId}/recommendations`,
            requestRecomendations
          ),
          fetch(
            "https://api-best-browser-games.vercel.app/categories",
            requestCategory
          ),
        ]);

        if (!gamesResponse.ok || !categoriesResponse.ok) {
          throw new Error("Erro na requisição da API");
        }

        const [gamesResult, categoriesResult] = await Promise.all([
          gamesResponse.json(),
          categoriesResponse.json(),
        ]);

        setGameData(gamesResult);
        setDisplayedGame(gamesResult);
        setCategories(categoriesResult);
      } catch (error) {
        console.error("Erro: ", error);
      }
    };
    fetchData();
  }, []);

  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedGame, setDisplayedGame] = useState([]);

  function handleChangeCategory(event) {
    setCategory(event.target.value);
  }

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  const filterByCategory = (games) => {
    return category === "" || category === "todos"
      ? games
      : games.filter((game) => game.category.name === category);
  };

  const filterBySearchTerm = (games) => {
    return searchTerm === ""
      ? games
      : games.filter((game) =>
          game.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
  };

  function handleClickSearch() {
    const selectedGameByCategory = filterByCategory(gameData);
    const selectedGameByTerm = filterBySearchTerm(selectedGameByCategory);

    setDisplayedGame(selectedGameByTerm);
  }
  return (
    <>
      <Header />

      <body>
        <div className="body__content--table">
          {gameData ? (
            <>
              <div className="body__content--table--topo">
                <SearchSortBar onClick={handleClickSearch}>
                  <InputBar
                    type="text"
                    searchTerm={searchTerm}
                    placeholder="Pesquisar jogo"
                    onChange={handleSearchTerm}
                  />
                  <Dropdown
                    value={category}
                    onChange={handleChangeCategory}
                    options={categories}
                  />
                </SearchSortBar>
              </div>
              <div className="body__content--table--base">
                <Table>
                  <TableContent content={displayedGame} />
                </Table>
              </div>
            </>
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      </body>
    </>
  );
};

export { Recomendacao };
