import React, { useState } from "react";
import BaseNode from "./BaseNode";
import { Position } from "reactflow";

export const FilterNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || "");

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
    <BaseNode title="Filter" handles={handles}>
      <div>
        <label>Condition:</label>
        <input
          type="text"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
        />
      </div>
    </BaseNode>
  );
};