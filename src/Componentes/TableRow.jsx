import React from "react";

const TableRow = (props) => {
  const { data, averageScore } = props;
  return (
    <tr>
      <td>
        <img
          src={data.game.imageURL}
          alt={data.game.name}
          style={{ width: "100px", height: "auto" }}
        />
      </td>
      <td>{data.game.name}</td>
      <td>{data.game.category.name}</td>
      <td>{averageScore.toFixed(2)}</td>
    </tr>
  );
};

export default TableRow;
