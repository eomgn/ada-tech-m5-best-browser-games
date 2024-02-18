import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

import logo from "../../Assets/Imagens/logo-best.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="header__content">
          <nav>
            <figure>
              <Link to="/">
                <img
                  src={logo}
                  alt="Best Browser Games"
                  title="Best Browser Games"
                />
              </Link>
            </figure>
            <div className="nav__button">
              <Link to="/">Home</Link>
              <Link to="/game">Jogos</Link>
              <Link to="/login">Entrar</Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export { Header };

// import React from 'react'
// import logo from '../../Assets/logo-best.png';

// import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture} from './styles';

// const Header = ({autenticado}) => {
//   return (
//     <Wrapper>
//       <Container>
//           <Row>
//             <img src={logo} alt="Logo da dio"/>
//             {autenticado ? (
//               <>
//                <BuscarInputContainer>
//                   <Input placeholder='Buscar...'/>
//                </BuscarInputContainer>
//                   <Menu>Live Code</Menu>
//                   <Menu>Global</Menu>
//               </>
//             ) : null}
//           </Row>
//           <Row>
//               {autenticado ? (
//                 <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
//               ) : (
//               <>

//                 <MenuRight href="/">Home</MenuRight>
//                 <MenuRight href="/login">Entrar</MenuRight>

//               </>)}
//           </Row>
//       </Container>
//     </Wrapper>
//   )
// }

// export { Header }
