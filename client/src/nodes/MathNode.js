import React, { useState } from "react";
import BaseNode from "./BaseNode";
import { Position } from "reactflow";

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || "add");

  const handles = [
    {
      id: `${id}-a`,
      type: "target",
      position: Position.Left,
      style: { top: "35%" },
    },
    {
      id: `${id}-b`,
      type: "target",
      position: Position.Left,
      style: { top: "65%" },
    },
    {
      id: `${id}-result`,
      type: "source",
      position: Position.Right,
    },
  ];

  return (
    <BaseNode title="Math" handles={handles}>
      <div>
        <label>Operation:</label>

        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
        </select>
      </div>
    </BaseNode>
  );
};