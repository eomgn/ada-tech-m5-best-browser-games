import "./styles.css";

const ItensListaAdm = (props) => {
  const { content } = props;
  const renderedCategory = content.map((item) => (
    <div key={item._id} className="item-lista">
      <span key={item._id} className="item-lista-nome">
        {item.name}
      </span>
      <button key={item._id} className="item-excluir-botao">
        Excluir
      </button>
    </div>
  ));
  return <div className="item-lista-container">{renderedCategory}</div>;
};

export default ItensListaAdm;
