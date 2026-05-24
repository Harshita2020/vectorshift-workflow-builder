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
import React from "react";
import BaseNode from "./BaseNode";
import { useState } from "react";
import { Position } from "reactflow";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const handles = [
    {
      id: `${id}-output`,
      type: "source",
      position: Position.Right,
      key: `${id}-output`,
      style: {},
    },
  ];
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
