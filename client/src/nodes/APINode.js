import React, { useState } from "react";
import BaseNode from "./BaseNode";
import { Position } from "reactflow";

export const APINode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || "");

  const handles = [
    {
      id: `${id}-input`,
      type: "target",
      position: Position.Left,
    },
    {
      id: `${id}-response`,
      type: "source",
      position: Position.Right,
    },
  ];

  return (
    <BaseNode title="API" handles={handles}>
      <div>
        <label>API URL:</label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
    </BaseNode>
  );
};