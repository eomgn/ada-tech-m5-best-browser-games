import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';

import jogo from '../../Assets/Imagens/jogo-01.jpg';

import { Header } from '../../Componentes/Header/Header.jsx';
import { Title } from '../../Componentes/Title/Title.jsx';
import { Text } from '../../Componentes/Text/Text.jsx';

const DescricaoJogo = () => {

    return (
        <>

            <Header />

            <body>
                <div className="body__content">
                    <div className="body__content--jogo">
                        <figure>
                            <img src={jogo} alt="Jogo-01" title="Jogo-01" />
                        </figure>
                    </div>                    
                    <div className="body__content--text">
                        <Title title="Baldur’s Gate 3" color="#f7b84b" />
                        <Text text="Fechando a nossa lista dos melhores jogos de 203 com chave de ouro, temos o grande campeão “Baldur’s Gate 3”. Desenvolvido por Larian Studios, este RPG épico mergulha os jogadores em um universo vasto, repleto de magia, criaturas misteriosas e escolhas que moldam a narrativa de maneiras surpreendentes." />
                        <Link to="/login">
                            <button className="button--assine">Avaliar</button>
                        </Link>  
                    </div>                   
                </div>
            </body>

  
        </>
    )
}

export { DescricaoJogo }









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