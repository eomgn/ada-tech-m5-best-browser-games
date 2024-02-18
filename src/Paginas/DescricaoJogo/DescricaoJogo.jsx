import React from "react";
import { useParams, Link } from "react-router-dom";
import "./styles.css";

import { Header } from "../../Componentes/Header/Header.jsx";
import { Title } from "../../Componentes/Title/Title.jsx";
import { Text } from "../../Componentes/Text/Text.jsx";
import Comentario from "../../Componentes/Comentario/Comentarios.jsx";

const DescricaoJogo = () => {
  // Possível puxar o game pelo id
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

  const gameRating = [
    {
      _id: "1",
      score: 4,
      description: "string",
      game: {
        _id: "1",
        name: "Wordle",
        category: "Puzzle",
      },
      user: {
        _id: "1",
        name: "Nome1",
      },
    },
    {
      _id: "2",
      score: 5,
      description: "string",
      game: {
        _id: "1",
        name: "Wordle",
        category: "Puzzle",
      },
      user: {
        _id: "2",
        name: "Nome2",
      },
    },
    {
      _id: "3",
      score: 4,
      description: "string",
      game: {
        _id: "1",
        name: "Wordle",
        category: "Puzzle",
      },
      user: {
        _id: "3",
        name: "Nome3",
      },
    },
  ];

  const { id } = useParams();
  const jogo = gameData.find((game) => game._id === id);

  if (!jogo) {
    return <div>Jogo não encontrado</div>;
  }

  return (
    <>
      <Header />

      <body>
        <div className="body__content">
          <div className="body__content--jogo">
            <figure>
              <img src={jogo.imageURL} alt={jogo.name} title={jogo.name} />
            </figure>
          </div>
          <div className="body__content--text">
            <Title title={jogo.name} color="#f7b84b" />
            <Text text={jogo.description} />
            <Link to="/login">
              <button className="button--assine">Avaliar</button>
            </Link>
          </div>
        </div>
        <div className="comentario-container">
          <Comentario gameRating={gameRating} />
        </div>
      </body>
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
