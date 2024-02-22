import './styles.css';
import React from 'react';
import { Header } from '../../Componentes/Header/Header.jsx';
import { Title } from '../../Componentes/Title/Title.jsx';
import { Text } from '../../Componentes/Text/Text.jsx';
import { Input } from '../../Componentes/Input/Input.jsx';
import { MdAccountCircle, MdEmail } from 'react-icons/md';
import { useForm } from 'react-hook-form';

const AlteracaoCadastro = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      newName: '',
      newEmail: '',
    },
  });

  const onSubmit = async (data) => {
    try {
      const userId = sessionStorage.getItem('user_id');
      const accessToken = sessionStorage.getItem('accessToken');

      if (!userId || !accessToken) {
        throw new Error('Usuário não autenticado');
      }

      const requestBody = {};

      if (data.newName) {
        requestBody.name = data.newName;
      }

      if (data.newEmail) {
        requestBody.email = data.newEmail;
      }

      const response = await fetch(`https://api-best-browser-games.vercel.app/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar dados para a API');
      }

      const responseData = await response.json();
      console.log('Resposta da API:', responseData);
    } catch (error) {
      console.error(`Erro ao enviar dados para a API: ${error.message}`);
    }
  };

  return (
    <div className="page-container">
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="body__content">
          <div className="body__content--text">
            <Title title="Altere seu Nome ou E-mail cadastrado!" color="#f7b84b" />
          </div>
          <div className="body__content--form">
            <Text text="Ficha de Cadastro" />

            <Input
              type="text"
              placeholder="Digite novo Nome"
              id="newName"
              name="newName"
              leftIcon={<MdAccountCircle />}
              control={control}
            />
            {errors.newName && <span>{errors.newName.message}</span>}

            <Input
              type="text"
              placeholder="Digite novo E-mail"
              id="newEmail"
              name="newEmail"
              leftIcon={<MdEmail />}
              control={control}
            />
            {errors.newEmail && <span>{errors.newEmail.message} </span>}

            <button type="submit">Enviar Alterações</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export { AlteracaoCadastro };


