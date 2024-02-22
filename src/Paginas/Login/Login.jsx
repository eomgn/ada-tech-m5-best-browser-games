import React from 'react';
import { jwtDecode } from 'jwt-decode';
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
                const decodedToken = jwtDecode(response.data.token);
                if (decodedToken && decodedToken.id) {
                    sessionStorage.setItem('accessToken', response.data.token);
                    sessionStorage.setItem('user_id', decodedToken.id);
                    sessionStorage.setItem('nome', decodedToken.name);
                    sessionStorage.setItem('email', decodedToken.email);
                    sessionStorage.setItem('roles', JSON.stringify(decodedToken.roles));

                navigate('/game');
            } else {
                alert('Usuário ou senha inválido');
            }}
        } catch (error) {
            console.error('Erro no login:', error);
            alert('Usuário ou senha inválido');
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

                            <Input
                                type="email"
                                placeholder="Digite seu e-mail"
                                leftIcon={<MdEmail />}
                                id="email"
                                name="email"
                                control={control}
                                rules={{
                                    required: 'E-mail é obrigatório',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Digite um e-mail válido',
                                    },
                                }}
                            />
                            {errors.email && <span>{errors.email.message}</span>}
          
                            <Input
                                type="password"
                                placeholder="Digite uma senha"
                                leftIcon={<MdLock />}
                                id="password"
                                name="password"
                                control={control}
                                rules={{
                                    required: 'Senha é obrigatória'
                                }}
                            />
                            {errors.password && <span>{errors.password.message}</span>}
                                                        
                            <br />

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
