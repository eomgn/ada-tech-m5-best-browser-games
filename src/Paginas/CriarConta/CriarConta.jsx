import './styles.css';

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
import { format } from 'date-fns';

const CriarConta = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    }); 
    
    const onSubmit = async (formData) => {
        try {

            // Converta a data para o formato desejado (24111980)
            const formattedDate = format(new Date(formData.birthDate), 'ddMMyyyy');

            // Ajuste o endpoint para o correto
            const response = await api.post('https://api-best-browser-games.vercel.app/users', {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                confirmPassword: formData.password,
                birthDate: formattedDate, // Use a data formatada
                country: formData.country,
                estado: formData.estado,
            });

            if (response.status === 201) {
                // Usuário criado com sucesso, redirecione para a página desejada
                navigate('/login');
            } else {
                // Lida com outros status de resposta, se necessário
                alert('Erro ao criar o usuário');
            }
        } catch (error) {
            // TODO: HOUVE UM ERRO, lida com o erro conforme necessário
            console.error('Erro ao criar o usuário', error);
        }
    }; 


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        birthDate: "",
        country: "",
        estado: "",
    });

    return (
        <>

        <div className="page-container">
            
            <Header />

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

                        <Input type="password" placeholder="Confirme sua senha" leftIcon={<MdLock />} id="confirmPassword" name="confirmPassword" control={control} pattern="[0-9]*" />
                        {errors.confirmPassword && <span>Senha é obrigatório</span>}                    

                        <Input type="date" placeholder="Digite sua data de nascimento" leftIcon={<MdOutlineCalendarMonth />} id="birthDate" name="birthDate" control={control} />
                        {errors.birthDate && <span>Data é obrigatório</span>}  

                        <Input type="country" placeholder="Digite seu país" leftIcon={<MdMap />} id="country" name="country" control={control} />
                        {errors.country && <span>País é obrigatório</span>} 

                        <Input type="text" placeholder="Selecione seu estado" leftIcon={<MdMap />} id="state" name="state" control={control} />
                        {errors.state && <span>Estado é obrigatório</span>}  

                        <Button title="Cadastrar" variant="secondary" type="submit"/>
                    </form>
                                              
                </div>                 
            </div>
        </div>
  
        </>
    )
}

export { CriarConta }
