import React from "react";
import BaseNode from "./BaseNode";
import { Position } from "reactflow";

export const LLMNode = ({ id }) => {
  const handles = [
    {
      id: `${id}-system`,
      type: "target",
      position: Position.Left,
      dataType: "text",
      style: {
        top: "33%",
      },
    },
    {
      id: `${id}-prompt`,
      type: "target",
      position: Position.Left,
      dataType: "text",
      style: {
        top: "66%",
      },
    },
    {
      id: `${id}-response`,
      type: "source",
      position: Position.Right,
      dataType: "text",
    },
  ];

  return (
    <BaseNode title="LLM" handles={handles}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          fontSize: "14px",
        }}
      >
        <div>
          <strong>Model:</strong> GPT Pipeline
        </div>

        <div
          style={{
            color: "#666",
            fontSize: "12px",
          }}
        >
          Accepts system + prompt input
        </div>
      </div>
    </BaseNode>
  );
};