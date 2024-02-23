import "./styles.css";

import { Header } from "../../Componentes/Header/Header.jsx";
import ItensListaAdm from "../../Componentes/ItensListaAdm/ItensListaAdm.jsx";
import { useState, useEffect } from "react";
import FormJogo from "../../Componentes/FormJogo/FormJogo.jsx";

const Adm = () => {
  const [gameData, setGameData] = useState(null);
  const [categories, setCategories] = useState(null);
  const [activeTab, setActiveTab] = useState("jogo");
  const [categoryInput, setCategoryInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gamesResponse = await fetch(
          "https://api-best-browser-games.vercel.app/games"
        );

        if (!gamesResponse.ok) {
          throw new Error("Erro na requisição da API");
        }

        const gamesResult = await gamesResponse.json();

        setGameData(gamesResult);
      } catch (error) {
        console.error("Erro: ", error);
      }
    };
    fetchData();
  }, [gameData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await fetch(
          "https://api-best-browser-games.vercel.app/categories"
        );

        if (!categoriesResponse.ok) {
          throw new Error("Erro na requisição da API");
        }

        const categoriesResult = await categoriesResponse.json();

        setCategories(categoriesResult);
      } catch (error) {
        console.error("Erro: ", error);
      }
    };
    fetchData();
  }, [categories]);

  const handleSubmitCategory = async (event) => {
    event.preventDefault();

    const token = sessionStorage.getItem("accessToken");

    const data = {
      name: categoryInput,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(
        "https://api-best-browser-games.vercel.app/categories",
        requestOptions
      );

      if (response.ok) {
        alert("Categoria adicionada com sucesso");
      } else {
        alert("Erro ao criar categoria");
      }
    } catch (error) {
      console.error("Erro ao criar categoria", error);
    }
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleInputCategory = (event) => {
    setCategoryInput(event.target.value);
  };

  return (
    <>
      <Header />
      <div className="adm-botao-container">
        <button
          className="jogo-adm-botao"
          onClick={() => handleTabClick("jogo")}
        >
          Jogos
        </button>
        <button
          className="categoria-adm-botao"
          onClick={() => handleTabClick("categoria")}
        >
          Categoria
        </button>
      </div>
      {gameData ? (
        <div className="adm-container">
          {activeTab === "jogo" ? (
            <div>
              {categories ? (
                <FormJogo categorias={categories} method="POST" />
              ) : (
                <p>Carregando formulário...</p>
              )}
              <ItensListaAdm
                categories={categories}
                content={gameData}
                tab="game"
              />
            </div>
          ) : (
            <div>
              <form onSubmit={handleSubmitCategory}>
                <input
                  type="text"
                  value={categoryInput}
                  id="category"
                  name="category"
                  placeholder="Insira Categoria"
                  onChange={handleInputCategory}
                  rules={{ required: "Insira uma categoria" }}
                />
                <button type="submit">Adicionar</button>
              </form>
              <ItensListaAdm
                categories={categories}
                content={categories}
                tab="category"
              />
            </div>
          )}
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </>
  );
};

export { Adm };
