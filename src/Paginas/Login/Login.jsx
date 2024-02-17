import React from 'react';
import './styles.css';

import { Header } from '../../Componentes/Header/Header.jsx';
import { Title } from '../../Componentes/Title/Title.jsx';
import { Text } from '../../Componentes/Text/Text.jsx';
import { Input } from '../../Componentes/Input/Input.jsx';
import { Button } from '../../Componentes/Button/Button.jsx';
import { MdEmail, MdLock } from 'react-icons/md'
import { useForm } from "react-hook-form";
import { api } from '../../Services/api';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    }); 
    
    const onSubmit = async (formData) => {
        try {
            const response = await api.post('https://api-best-browser-games.vercel.app/users/login', {
                email: formData.email,
                password: formData.password,
            });

            if (response.status === 201) {
                navigate('/descricao-jogo');
            } else {
                alert('Usuário ou senha inválido');
            }
        } catch (error) {
            // TODO: HOUVE UM ERRO
            console.error('Erro ao realizar o login', error);
        }
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
                        <Text text="Acesse o Best Browser Games com a sua conta." />
                        
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input type="email" placeholder="Digite seu e-mail" leftIcon={<MdEmail />} id="email" name="email" control={control} />
                            {errors.email && <span>E-mail é obrigatório</span>}
                                                
                            <Input type="password" placeholder="Digite uma senha" leftIcon={<MdLock />} id="password" name="password" control={control} pattern="[0-9]*" />
                            {errors.password && <span>Senha é obrigatório</span>}    
                                                
                            <Button title="Entrar" variant="secondary" type="submit"/>
                        </form>

                        <div>
                            <Link to="/recuperar-senha" className="esqueci-text">Esqueci minha senha </Link>
                            <Link to="/criar-conta" className="criar-text"> Criar Conta</Link>               
                        </div>
                    </div>                    
                </div>
            </body>
        </>
    )
}

export { Login }
