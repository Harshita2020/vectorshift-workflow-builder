import React from "react";
import BaseNode from "./BaseNode";

import { useState } from "react";
import { Position } from "reactflow";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_"),
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };
  const handles = [
    {
      id: `${id}-input`,
      type: "source",
      position: Position.Right,
      key: `${id}-input`,
      style: {},
    },
  ];

  return (
    <BaseNode title="Input" handles={handles}>
      <div>
        <label>
          Name:
          <input type="text" value={currName} onChange={handleNameChange} />
        </label>
        <label>
          Type:
          <select value={inputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="Boolean">Boolean</option>
            <option value="Nummber">Number</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};
