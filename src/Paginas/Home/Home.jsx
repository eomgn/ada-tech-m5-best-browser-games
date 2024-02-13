import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';

import logo from '../../Assets/Imagens/banner-best.png';

import { Header } from '../../Componentes/Header/Header.jsx';
import { Title } from '../../Componentes/Title/Title.jsx';
import { Text } from '../../Componentes/Text/Text.jsx';

const Home = () => {

    return (
        <>

            <Header />

            <body>
                <div className="body__content">
                    <div className="body__content--text">
                        <Title title="Seja Bem-vindo!" color="#f7b84b" />
                        <Text text="O Best Browser Games é uma comunidade web onde seus membros poderão compartilhar as suas impressões sobre os browser games que já jogaram, identificando o que gostaram e o que não gostaram." />
                        <Link to="/login">
                            <button className="button--assine">Começar agora</button>
                        </Link>  
                    </div>
                    <div className="body__content--logo">
                        <figure>
                            <img src={logo} alt="Best Browser Games" title="Best Browser Games" />
                        </figure>
                    </div>                    
                </div>
            </body>

  
        </>
    )
}

export { Home }









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