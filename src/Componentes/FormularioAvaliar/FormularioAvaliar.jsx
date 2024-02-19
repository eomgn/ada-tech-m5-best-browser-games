import { useState } from "react";
import "./styles.css";

const FormularioAvaliar = () => {
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
  };

  return (
    <form className="avaliar-form" onSubmit={handleSubmit}>
      <label className="nota-jogo-avaliar">
        Nota:
        <input
          type="number"
          min="1"
          max="5"
          value={nota}
          onChange={handleInputNota}
          required
        />
      </label>
      <label className="comentario-jogo-avaliar">
        Comentário:
        <textarea value={comentario} onChange={handleInputComentario} />
      </label>
      <button className="botao-enviar" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default FormularioAvaliar;
