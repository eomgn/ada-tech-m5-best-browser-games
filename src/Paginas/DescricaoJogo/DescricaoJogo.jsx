import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import { Header } from "../../Componentes/Header/Header.jsx";
import { Title } from "../../Componentes/Title/Title.jsx";
import { Text } from "../../Componentes/Text/Text.jsx";
import Comentario from "../../Componentes/Comentario/Comentario.jsx";
import BotaoAvaliar from "../../Componentes/BotaoAvaliar/BotaoAvaliar.jsx";
import FormularioAvaliar from "../../Componentes/FormularioAvaliar/FormularioAvaliar.jsx";

const DescricaoJogo = () => {
  const { id } = useParams();

  const [gameData, setGameData] = useState(null);
  const [gameRating, setGameRating] = useState(null);
  const [condicaoLogado, setCondicaoLogado] = useState(false);
  const [campoAvaliacao, setCampoAvaliacao] = useState(false);
  const [comentario, setComentario] = useState("");
  const [comentarioEnviado, setComentarioEnviado] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [gameResponse, gameRatingResponse] = await Promise.all([
          fetch(`https://api-best-browser-games.vercel.app/games/${id}`),
          fetch(
            `https://api-best-browser-games.vercel.app/games/${id}/ratings`
          ),
        ]);

        if (!gameResponse.ok || !gameRatingResponse.ok) {
          throw new Error("Erro na requisição da API");
        }

        const [gamesResult, gameRatingResult] = await Promise.all([
          gameResponse.json(),
          gameRatingResponse.json(),
        ]);

        setGameData(gamesResult);
        setGameRating(gameRatingResult);
      } catch (error) {
        console.error("Erro: ", error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const name = sessionStorage.getItem("nome");
    const userId = sessionStorage.getItem("user_id");
    const isLoggedIn = name !== null;
    setCondicaoLogado(isLoggedIn);
  }, []);

  const handleClick = () => {
    setCampoAvaliacao(!campoAvaliacao);
  };

  const handleSubmitComentario = async (novoComentario) => {
    const url = `https://api-best-browser-games.vercel.app/ratings`;
    const userId = sessionStorage.getItem('user_id');

    if (!userId) {
      console.error("ID do usuário não encontrado.");
      return;
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify({
          score: novoComentario.score,
          description: novoComentario.description.trim(),
          game: id,
          user: userId,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
  
        if (responseData) {
          console.log('Comentário enviado com sucesso!');
          const newGameRating = responseData;
          setGameRating([...gameRating, newGameRating]);
          setComentarioEnviado(true);
          setComentario('');
        } else {
          console.error('Erro ao converter a resposta para JSON.');
        }
      } else {
        const errorMessage = await response.json();
        console.error(`Erro ao enviar o comentário: ${errorMessage.message}`);
      }
    } catch (error) {
      console.error("Erro: ", error);
    }
  };
 
  return (
    <>
      <Header />

      {gameData ? (
        <body>
          <div className="body__content">
            <div className="body__content--jogo">
              <figure>
                <img
                  src={gameData.imageURL}
                  alt={gameData.name}
                  title={gameData.name}
                />
              </figure>
            </div>
            <div className="body__content--text">
              <Title title={gameData.name} color="#f7b84b" />
              <Text text={gameData.description} />
              <BotaoAvaliar condicao={condicaoLogado} onClick={handleClick} />
            </div>
          </div>
          <div>{campoAvaliacao && (<div><FormularioAvaliar onSubmit={handleSubmitComentario} />
              {comentarioEnviado ? (alert('Comentário enviado com sucesso!')) : null}</div>)}
          </div>
          <div className="comentario-container">
            {gameData.name && <Comentario gameRating={gameRating} />}
          </div>
        </body>
      ) : (
        <p className="carregando">Carregando...</p>
      )}
    </>
  );
};

export { DescricaoJogo };


