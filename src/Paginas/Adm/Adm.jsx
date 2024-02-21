import "./styles.css";

import { Header } from "../../Componentes/Header/Header.jsx";
import ListaItensAdm from "../../Componentes/ListaItensAdm/ListaItensAdm.jsx";
import ItensListaAdm from "../../Componentes/ItensListaAdm/ItensListaAdm.jsx";
import { Title } from "../../Componentes/Title/Title.jsx";
import { Text } from "../../Componentes/Text/Text.jsx";
import { Input } from "../../Componentes/Input/Input.jsx";
import { Button } from "../../Componentes/Button/Button.jsx";
import {
  MdAccountCircle,
  MdEmail,
  MdLock,
  MdOutlineCalendarMonth,
  MdMap,
} from "react-icons/md";
import { useForm } from "react-hook-form";
import { api } from "../../Services/api";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { useState, useEffect } from "react";

const Adm = () => {
  const [gameData, setGameData] = useState(null);
  const [categories, setCategories] = useState(null);
  const [activeTab, setActiveTab] = useState("jogo");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [gamesResponse, categoriesResponse] = await Promise.all([
          fetch("https://api-best-browser-games.vercel.app/games"),
          fetch("https://api-best-browser-games.vercel.app/categories"),
        ]);

        if (!gamesResponse.ok || !categoriesResponse.ok) {
          throw new Error("Erro na requisição da API");
        }

        const [gamesResult, categoriesResult] = await Promise.all([
          gamesResponse.json(),
          categoriesResponse.json(),
        ]);

        setGameData(gamesResult);
        setCategories(categoriesResult);
      } catch (error) {
        console.error("Erro: ", error);
      }
    };
    fetchData();
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
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
              <div>
                <input type="text" placeholder="Insira Jogo" />
                <button>Adicionar</button>
              </div>
              <ListaItensAdm>
                <ItensListaAdm content={gameData} />
              </ListaItensAdm>
            </div>
          ) : (
            <div>
              <div>
                <input type="text" placeholder="Insira Categoria" />
                <button>Adicionar</button>
              </div>
              <ListaItensAdm>
                <ItensListaAdm content={categories} />
              </ListaItensAdm>
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
