import React, { useState } from "react";
import PropTypes from "prop-types";

const FormularioCadastro = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    date: "",
    country: "",
    estado: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onCadastro(formData);
  };

  return (
    <div>
      <h1>FICHA DE CADASTRO</h1>
      <form id="request" onSubmit={handleSubmit}>
        <label>Nome Completo: </label>
        <input
          placeholder="Digite seu nome completo"
          id="name"
          value={formData.name}
          onChange={handleChange}
          pattern="[A-Za-z ]"
        />
        <br />
        <label>E-mail: </label>
        <input
          placeholder="Digite seu e-mail"
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label>Senha: </label>
        <input
          placeholder="Digite uma senha"
          type="password"
          id="password"
          pattern="[0-9]*"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <label>Data de Nascimento: </label>
        <input
          placeholder="Digite sua data de nascimento"
          type="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
        />
        <br />
        <label>País: </label>
        <input
          placeholder="Digite seu país"
          type="text"
          id="country"
          value={formData.country}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="inputEstado" id="estado">
          Estado:
        </label>
        <select
          id="estado"
          value={formData.estado}
          onChange={handleChange}
        >
          <option value="">Escolher...</option>
        <option value="Fora do Brasil">Fora do Brasil</option>
        <option value="AC">AC</option>
        <option value="AL">AL</option>
        <option value="AP">AP</option>
        <option value="AM">AM</option>
        <option value="BA">BA</option>
        <option value="CE">CE</option>
        <option value="DF">DF</option>
        <option value="ES">ES</option>
        <option value="GO">GO</option>
        <option value="MA">MA</option>
        <option value="MT">MT</option>
        <option value="MS">MS</option>
        <option value="MG">MG</option>
        <option value="PA">PA</option>
        <option value="PB">PB</option>
        <option value="PR">PR</option>
        <option value="PE">PE</option>
        <option value="PI">PI</option>
        <option value="RJ">RJ</option>
        <option value="RN">RN</option>
        <option value="RS">RS</option>
        <option value="RO">RO</option>
        <option value="RR">RR</option>
        <option value="SC">SC</option>
        <option value="SP">SP</option>
        <option value="SE">SE</option>
        <option value="TO">TO</option>
        </select>
        <br />
        <br />
        <button type="submit"> Cadastrar </button>
      </form>
    </div>
  );
};

FormularioCadastro.propTypes = {
  onCadastro: PropTypes.func.isRequired,
};

export default FormularioCadastro;