import { Link } from "react-router-dom";
import "./styles.css";

const TableContent = (props) => {
  const { content } = props;
  const renderedGame = content.map((game) => (
    <tr key={game.game._id}>
      <td>
        <Link to={`/game/${game.game._id}`}>
          <img
            className="jogo-imagem"
            src={game.game.imageURL}
            alt={game.game.name}
          />
        </Link>
      </td>
      <td>
        <Link to={`/game/${game.game._id}`}>
          <p className="jogo-nome">{game.game.name}</p>
        </Link>
      </td>
      <td>{game.game.category.name}</td>
      <td>{game.game.averageScore}</td>
    </tr>
  ));

  return <tbody>{renderedGame}</tbody>;
};

export default TableContent;
