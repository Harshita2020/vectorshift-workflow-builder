import React, { useState } from "react";
import BaseNode from "./BaseNode";
import { Position } from "reactflow";

export const OutputNode = ({ id, data }) => {
  // state
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );

  const [outputType, setOutputType] = useState(
    data?.outputType || "Text"
  );

  // handlers
  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  // handles
  const handles = [
    {
      id: `${id}-value`,
      type: "target",
      position: Position.Left,
      dataType: "text",
    },
  ];

  return (
    <BaseNode title="Output" handles={handles}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <label
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            fontSize: "13px",
          }}
        >
          Name

          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
          />
        </label>

        <label
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            fontSize: "13px",
          }}
        >
          Type

          <select
            value={outputType}
            onChange={handleTypeChange}
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};