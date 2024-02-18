import './styles.css';

import React, { useState } from 'react';
import { Header } from '../../Componentes/Header/Header.jsx';
import { Title } from '../../Componentes/Title/Title.jsx';
import { Text } from '../../Componentes/Text/Text.jsx';
import { Input } from '../../Componentes/Input/Input.jsx';
import { MdAccountCircle, MdEmail } from 'react-icons/md'
import { useForm } from "react-hook-form";

const AlteracaoCadastro = () => {

  const { control, formState: { errors } } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
    });

  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
  };

  const enviarDadosParaAPI = async () => {
    try {
      const userId = sessionStorage.getItem('user_id');
      const accessToken = sessionStorage.getItem('accessToken');

      if (!userId || !accessToken) {
        throw new Error('Usuário não autenticado');
      }

      const response = await fetch(`https://api-best-browser-games.vercel.app/users/${userId}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify({
          name: newName,
          email: newEmail,
        }),
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar dados para a API');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Erro ao enviar dados para a API: ${error.message}`);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await enviarDadosParaAPI();
      console.log('Resposta da API:', response);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
      <>

      <div className="page-container">
        
        <Header />

        <div className="body__content">
          <div className="body__content--text">
            <Title title="Altere seu Nome ou E-mail cadastrado!" color="#f7b84b" />
          </div>
          <div className="body__content--form">
            <Text text="Ficha de Cadastro" />

            <Input type="text" placeholder="Digite novo Nome" id="newName" name="newName" value={newName} leftIcon={<MdAccountCircle />} control={control} onChange={handleNameChange} rules={{ required: 'Nome é obrigatório' }} />
            {errors.newName && <span>{errors.newName.message}</span>}

            <Input type="text" placeholder="Digite novo E-mail" id="newEmail" name="newEmail" value={newEmail} leftIcon={<MdEmail />} control={control} onChange={handleEmailChange} rules={{ required: 'E-mail é obrigatório' }} />
            {errors.newEmail && <span>{errors.newEmail.message}</span>}

            <button onClick={handleSubmit}>Enviar Alterações</button>
          </div>
        </div>
      </div>

      </>
  );
};

export { AlteracaoCadastro };

