import React, { useEffect, useRef, useState } from "react";
import BaseNode from "./BaseNode";
import { Position, useUpdateNodeInternals } from "reactflow";

export const TextNode = ({ id, data }) => {
  // state
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  // refs
  const textareaRef = useRef(null);

  // react flow hook
  const updateNodeInternals = useUpdateNodeInternals();

  // textarea auto resize
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }

    updateNodeInternals(id);
  }, [currText, id, updateNodeInternals]);

  // handlers
  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // parse variables
  const parseVariables = (text) => {
    const regex = /{{(.*?)}}/g;

    const matches = [...text.matchAll(regex)];

    const variables = matches
      .map((match) => match[1].trim())
      .filter(Boolean);

    return [...new Set(variables)];
  };

  // derived variables
  const variables = parseVariables(currText);

  // dynamic variable handles
  const variableHandles = variables.map((variable, index) => ({
    id: `${id}-${variable}`,
    type: "target",
    position: Position.Left,
    dataType: "text",
    label: variable,
    style: {
      top: `${(index + 1) * (100 / (variables.length + 1))}%`,
    },
  }));

  // static output handle
  const outputHandle = {
    id: `${id}-output`,
    type: "source",
    position: Position.Right,
    dataType: "text",
  };

  // combined handles
  const handles = [...variableHandles, outputHandle];

  return (
    <BaseNode
      title="Text"
      handles={handles}
      style={{
        width: Math.max(220, currText.length * 7),
        minHeight: 120,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <label
          style={{
            fontSize: "13px",
            fontWeight: "600",
          }}
        >
          Text
        </label>

        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          placeholder="Enter text with {{variables}}"
          rows={1}
          style={{
            width: "100%",
            resize: "none",
            overflow: "hidden",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "14px",
            fontFamily: "monospace",
            lineHeight: "1.5",
            boxSizing: "border-box",
          }}
        />

        {variables.length > 0 && (
          <div
            style={{
              fontSize: "12px",
              color: "#666",
            }}
          >
            Variables: {variables.join(", ")}
          </div>
        )}
      </div>
    </BaseNode>
  );
};