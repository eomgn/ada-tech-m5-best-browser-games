import React, { useState } from "react";
import "./styles.css";

const FormularioAvaliar = ({ onSubmit }) => {
  const [nota, setNota] = useState(1);
  const [comentario, setComentario] = useState("");

  const handleInputNota = (event) => {
    setNota(event.target.value);
  };

  const handleInputComentario = (event) => {
    setComentario(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const novoComentario = {
      score: nota,
      description: comentario,
    };
    onSubmit(novoComentario);
    setNota(1);
    setComentario("");
  };

  return (
   
    <form className="avaliar-form" onSubmit={handleSubmit}>

      <div className="avaliacao">

        <label className="comentario-jogo-avaliar">
          <p>Comentário</p>
          <textarea value={comentario} onChange={handleInputComentario} />
        </label>

        <label className="nota-jogo-avaliar">
          <p>Nota</p>
            <input
              type="number"
              min="1"
              max="5"
              value={nota}
              onChange={handleInputNota}
              required
            />
        </label>

      </div>
      
      <button className="botao-enviar" type="submit">
        Enviar
      </button>

    </form>

  );
};

export default FormularioAvaliar;