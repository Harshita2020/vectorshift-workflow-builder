import React, { useState } from "react";
import BaseNode from "./BaseNode";
import { Position } from "reactflow";

export const DelayNode = ({ id, data }) => {
  const [delay, setDelay] = useState(data?.delay || 1000);

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
    <BaseNode title="Delay" handles={handles}>
      <div>
        <label>Delay (ms):</label>
        <input
          type="number"
          value={delay}
          onChange={(e) => setDelay(e.target.value)}
        />
      </div>
    </BaseNode>
  );
};