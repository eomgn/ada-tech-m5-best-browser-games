import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import usuerOn from "../../Assets/Imagens/usuerOn.png";
import logo from "../../Assets/Imagens/logo-best.png";

const Header = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const name = sessionStorage.getItem("nome");
    const email = sessionStorage.getItem("email");
    const isLoggedIn = name !== null;

    if (isLoggedIn) {
      setUserInfo({ name, email });
    } else {
      setUserInfo(null);
    }
  }, [userInfo]);

  const handleLogout = () => {
    sessionStorage.removeItem("nome");
    sessionStorage.removeItem("email");
  };

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

              {userInfo ? (
                <div className="user-info">
                  <Link to="/login" onClick={handleLogout}>
                    Sair
                  </Link>

                  <figure>
                    <Link to="/alteracao-cadastro">
                      <img
                        className="image-name"
                        src={usuerOn}
                        alt="Online"
                        title="Online"
                      />
                    </Link>
                  </figure>

                  <span className="user-name">{userInfo.name}</span>
                </div>
              ) : (
                <Link to="/login">Entrar</Link>
              )}
              <Link to="/adm">ADM</Link>
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
