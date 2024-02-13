import './styles.css';

// import Formulario from "../../Componentes/Formulario/Formulario.jsx";  // Corrija o caminho do import
// import SearchSortBar from "../../Componentes/SearchSortBar/SearchSortBar.jsx";  // Corrija o caminho do import

import React, { useState } from "react";
import { Header } from '../../Componentes/Header/Header.jsx';
import { Title } from '../../Componentes/Title/Title.jsx';
import { Text } from '../../Componentes/Text/Text.jsx';
import { Input } from '../../Componentes/Input/Input.jsx';
import { Button } from '../../Componentes/Button/Button.jsx';
import { MdAccountCircle, MdEmail, MdLock, MdOutlineCalendarMonth, MdMap } from 'react-icons/md'
import { useForm } from "react-hook-form";
import { api } from '../../Services/api';
import { useNavigate } from 'react-router-dom';

const CriarConta = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    }); 
    
    const onSubmit = async (formData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);
            
            if(data.length && data[0].id){
                navigate('/feed') 
                return
            }

            alert('Usuário ou senha inválido')
        }catch(e){
            //TODO: HOUVE UM ERRO
        }
    }; 


    const [formularioData, setFormularioData] = useState({
        name: "",
        email: "",
        password: "",
        date: "",
        country: "",
        estado: "",
    });

    const handleFormularioChange = (newData) => {
        setFormularioData(newData);
    };

    // Lista estática de categorias, o componente CategoryDropdwon está lendo os dados da maneira estruturada abaixo
    const categories = [
        { id: "1", name: "Ação" },
        { id: "2", name: "Aventura" },
        { id: "3", name: "Estratégia" },
        { id: "4", name: "RPG" },
    ];

    const handleSearch = (searchTerm) => {
        console.log("Pesquisar por:", searchTerm);
    };

    const handleCategoryChange = (selectedCategory) => {
        console.log("Categoria selecionada:", selectedCategory);
    };

    return (
        <>
        
            <Header />

            <body>
                <div className="body__content">
                    <div className="body__content--text">
                        <Title title="Compartilhe as impressões sobre os Browser games que você já jogou..." color="#f7b84b" />
                    </div>
                    <div className="body__content--form">
                        <Text text="Ficha de Cadastro" />
                        
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <Input type="text" placeholder="Digite seu nome completo" leftIcon={<MdAccountCircle />} id="name" name="name" control={control} pattern="[A-Za-z ]+" />
                            {errors.name && <span>Nome é obrigatório</span>}

                            <Input type="email" placeholder="Digite seu e-mail" leftIcon={<MdEmail />} id="email" name="email" control={control} />
                            {errors.email && <span>E-mail é obrigatório</span>}

                            <Input type="password" placeholder="Digite uma senha" leftIcon={<MdLock />} id="password" name="password" control={control} pattern="[0-9]*" />
                            {errors.password && <span>Senha é obrigatório</span>}                            

                            <Input type="date" placeholder="Digite sua data de nascimento" leftIcon={<MdOutlineCalendarMonth />} id="date" name="date" control={control} />
                            {errors.date && <span>Data é obrigatório</span>}  

                            <Input type="country" placeholder="Digite seu país" leftIcon={<MdMap />} id="country" name="country" control={control} />
                            {errors.text && <span>País é obrigatório</span>}  

                            <Input type="text" placeholder="Selecione seu estado" leftIcon={<MdMap />} id="estado" name="estado" control={control} />
                            {errors.estado && <span>Estado é obrigatório</span>}  

                            <Button title="Cadastrar" variant="secondary" type="submit"/>
                        </form>
                                              
                    </div>                    
                </div>
            </body>

  
        </>
    )
}

export { CriarConta }






// import { MdEmail, MdLock } from 'react-icons/md'
// import { Button } from '../../Componentes/Button/Button.jsx';
// import { Header } from '../../Componentes/Header/Header.jsx';
// import { Input } from '../../Componentes/Input/Input.jsx';
// import { useForm } from "react-hook-form";
// import { useNavigate } from 'react-router-dom';
// import { api } from '../../Services/api';
// import { Container, Title, Column, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper } from './styles';

// const Login = () => {

//     const navigate = useNavigate()

//     const { control, handleSubmit, formState: { errors  } } = useForm({
//         reValidateMode: 'onChange',
//         mode: 'onChange',
//     });

//     const onSubmit = async (formData) => {
//         try{
//             const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);
            
//             if(data.length && data[0].id){
//                 navigate('/feed') 
//                 return
//             }

//             alert('Usuário ou senha inválido')
//         }catch(e){
//             //TODO: HOUVE UM ERRO
//         }
//     };

//     console.log('errors', errors);

//     return (
//         <>

//         <Header />

//         <Container>

//             <Column>
//                 <Title>
//                     Compartilhe as impressões sobre os Browser games que você já jogou...
//                 </Title>
//             </Column>

//             <Column>
//                 <Wrapper>
//                 <SubtitleLogin>Acesse o Best Browser Games com a sua conta</SubtitleLogin>
                
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
//                     {errors.email && <span>E-mail é obrigatório</span>}
                    
//                     <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
//                     {errors.senha && <span>Senha é obrigatório</span>}
                    
//                     <Button title="Entrar" variant="secondary" type="submit"/>
//                 </form>

//                 <Row>
//                     <EsqueciText>Esqueci minha senha</EsqueciText>
//                     <CriarText>Criar Conta</CriarText>
//                 </Row>

//                 </Wrapper>
//             </Column>

//         </Container>
    
//         </>
//     )
// }

// export { Login }