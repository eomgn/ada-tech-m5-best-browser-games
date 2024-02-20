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
  }, []);

  const [condicaoLogado, setCondicaoLogado] = useState(false);
  const [campoAvaliacao, setCampoAvaliacao] = useState(false);
  const [comentario, setComentario] = useState("");

  useEffect(() => {
    const name = sessionStorage.getItem("nome");
    const userId = sessionStorage.getItem("user_id");
    const isLoggedIn = name !== null;
    setCondicaoLogado(isLoggedIn);
  }, []);

  const handleClick = () => {
    setCampoAvaliacao(!campoAvaliacao);
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
          <div>{campoAvaliacao && <FormularioAvaliar />}</div>
          <div className="comentario-container">
            <Comentario gameRating={gameRating} />
          </div>
        </body>
      ) : (
        <p>Carregando...</p>
      )}
    </>
  );
};

export { DescricaoJogo };

// import { useNavigate  } from "react-router-dom";
// import { Button } from '../../Componentes/Button';
// import { Header } from '../../Componentes/Header';
// import { Container, Title, TextContent, ImageContainer, Image } from './styles';
// import bannerImage from '../../Assets/banner-best.png';

// const Home = () => {

//     const navigate = useNavigate();

//     const handleClickSignIn = () => {
//         navigate('/login')
//     }

//     return (
//         <>

//         <Header />

//         <Container>
//             <div id="container_texto">
//                 <Title>
//                     Seja Bem-vindo!
//                 </Title>

//                 <TextContent>
//                     O Best Browser Games é uma comunidade web onde seus membros poderão compartilhar as suas impressões sobre os browser games que já jogaram, identificando o que gostaram e o que não gostaram.

//                     <br /><br /><br />

//                     <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} />
//                 </TextContent>
//             </div>

//             <ImageContainer id="container_imagem">
//                 <Image src={bannerImage} alt="Imagem principal do site." />
//             </ImageContainer>

//         </Container>

//         </>
//     )
// }

// export { Home }
