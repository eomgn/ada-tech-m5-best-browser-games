import React from "react";
import TableRow from "./TableRow.jsx";

const Table = (props) => {
  const { data } = props;
  const calculateAverageScore = (gameId) => {
    const gameScores = data.filter((score) => score.game._id === gameId);
    const totalScores = gameScores.reduce(
      (total, score) => total + score.score,
      0
    );
    return totalScores / gameScores.length;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Imagem</th>
          <th>Nome do Jogo</th>
          <th>Categoria</th>
          <th>Score Médio</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <TableRow
            key={item.game._id}
            data={item}
            averageScore={calculateAverageScore(item.game._id)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
