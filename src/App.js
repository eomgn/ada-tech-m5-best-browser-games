import './App.css';
import Formulario from './Componentes/Formulario.jsx';
import React, { useState } from "react";

function App() {
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
 
  return (
    <div className="App">
      <Formulario
      name={formularioData.name}
      email={formularioData.email}
      password={formularioData.password}
      date={formularioData.date}
      country={formularioData.country}
      estado={formularioData.estado}
      onFormularioChange={handleFormularioChange} />
    </div>
  );
}

export default App;
