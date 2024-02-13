import React from "react";
import TableRow from "./TableRow.jsx";

const Table = (props) => {
  const { data } = props;

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
            averageScore={item.game.averageScore}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
