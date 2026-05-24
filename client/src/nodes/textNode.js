// // textNode.js

// import { useState } from 'react';
// import { Handle, Position } from 'reactflow';

// export const TextNode = ({ id, data }) => {
//   const [currText, setCurrText] = useState(data?.text || '{{input}}');

//   const handleTextChange = (e) => {
//     setCurrText(e.target.value);
//   };

//   return (
//     <div style={{width: 200, height: 80, border: '1px solid black'}}>
//       <div>
//         <span>Text</span>
//       </div>
//       <div>
//         <label>
//           Text:
//           <input
//             type="text"
//             value={currText}
//             onChange={handleTextChange}
//           />
//         </label>
//       </div>
//       <Handle
//         type="source"
//         position={Position.Right}
//         id={`${id}-output`}
//       />
//     </div>
//   );
// }
import React, { useEffect } from "react";
import BaseNode from "./BaseNode";
import { useState } from "react";
import { Position, useUpdateNodeInternals } from "reactflow";

export const TextNode = ({ id, data }) => {
  //state
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  //state handlers

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  //variable parsing

  const parseVariables = (text) => {
    const regex = /{{(.*?)}}/g;

    const matches = [...text.matchAll(regex)];

    const variables = matches.map((match) => match[1].trim()).filter(Boolean);

    return [...new Set(variables)];
  };

  //variables
  // currently supports text-only variables
  const variables = parseVariables(currText);
  const variableHandles = variables.map((variable, index) => ({
    id: `${id}-${variable}`,
    type: "target",
    position: Position.Left,
    datatype: "text",
    key: `${id}-${variable}`,
    style: {
      top: `${(index + 1) * (100 / (variables.length + 1))}%`,
    },
  }));

  const outputHandle = {
    id: `${id}-output`,
    type: "source",
    position: Position.Right,
  };

  const handles = [...variableHandles, outputHandle];

  const updateNodeInternals = useUpdateNodeInternals();
  useEffect(() => {
    updateNodeInternals(id);
  }, [currText, id, updateNodeInternals]);
  // const parsedText = currText.replace(/{{(.*?)}}/g, (match, p1) => {
  //   const inputId = p1.trim();
  //   return data?.inputs?.[inputId] || match;
  // });

  //UI

  return (
    <>
      <BaseNode title="Text" handles={handles}>
        <div>
          <label>
            Text:
            <input type="text" value={currText} onChange={handleTextChange} />
          </label>
        </div>
      </BaseNode>
    </>
  );
};
