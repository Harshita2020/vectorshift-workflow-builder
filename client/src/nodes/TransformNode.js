import React, { useState } from "react";
import BaseNode from "./BaseNode";
import { Position } from "reactflow";

export const TransformNode = ({ id, data }) => {
  const [operation, setOperation] = useState(
    data?.operation || "uppercase"
  );

  const handles = [
    {
      id: `${id}-input`,
      type: "target",
      position: Position.Left,
    },
    {
      id: `${id}-output`,
      type: "source",
      position: Position.Right,
    },
  ];

  return (
    <BaseNode title="Transform" handles={handles}>
      <div>
        <label>Operation:</label>

        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="uppercase">Uppercase</option>
          <option value="lowercase">Lowercase</option>
          <option value="trim">Trim</option>
        </select>
      </div>
    </BaseNode>
  );
};