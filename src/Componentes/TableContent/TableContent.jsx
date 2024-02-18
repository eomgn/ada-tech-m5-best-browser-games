import { Link } from "react-router-dom";
import "./styles.css";

const TableContent = (props) => {
  const { content } = props;
  const renderedGame = content.map((game) => (
    <tr key={game._id}>
      <td>
        <Link to={`/game/${game._id}`}>
          <img className="jogo-imagem" src={game.imageURL} alt={game.name} />
        </Link>
      </td>
      <td>
        <Link to={`/game/${game._id}`}>
          <p className="jogo-nome">{game.name}</p>
        </Link>
      </td>
      <td>{game.category.name}</td>
    </tr>
  ));

  return <tbody>{renderedGame}</tbody>;
};

export default TableContent;
