import "./styles.css";

const BotaoAvaliar = (props) => {
  const { condicao, onClick } = props;
  return (
    <>
      <button
        onClick={onClick}
        disabled={!condicao}
        className={condicao ? "botao-habilitado" : "botao-desabilitado"}
      >
        Avaliar
      </button>
    </>
  );
};

export default BotaoAvaliar;
