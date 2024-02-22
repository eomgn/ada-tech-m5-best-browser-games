import React from 'react';
import logo from '../../Assets/Imagens/banner-best.png';
import { Header } from '../../Componentes/Header/Header.jsx';
import { Title } from '../../Componentes/Title/Title.jsx';
import { Text } from '../../Componentes/Text/Text.jsx';

const Admin = () => {

    return (
        <>

            <Header />

            <body>
                <div className="body__content">
                    <div className="body__content--text">
                        <Title title="PAGINA DO ADMINISTRADOR" color="#f7b84b" />
                        <Text text="O Best Browser Games é uma comunidade web onde seus membros poderão compartilhar as suas impressões sobre os browser games que já jogaram, identificando o que gostaram e o que não gostaram." /> 
                    </div>                  
                </div>
            </body>

  
        </>
    )
}

export { Admin }









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