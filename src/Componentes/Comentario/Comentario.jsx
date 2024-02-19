import { Text } from "../Text/Text";
import "./styles.css";

const Comentario = (props) => {
  const { gameRating } = props;
  const renderedRating = gameRating.map((rating) => (
    <div className="comentario-unico-container" key={rating._id}>
      <div className="header-usuario">
        <div>
          <p className="nome-usuario">{rating.user.name}</p>
        </div>
        <div>
          <span>{rating.score}</span>
        </div>
      </div>
      <div className="jogo-descricao">
        <Text text={rating.description} />
      </div>
    </div>
  ));
  return <>{renderedRating}</>;
};

export default Comentario;
