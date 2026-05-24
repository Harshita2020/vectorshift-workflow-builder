import React from "react";
import { Handle, Position } from "reactflow";

const BaseNode = ({ title, handles, children }) => {
  return (
    <div style={{ width: 200, height: "auto", border: "1px solid black" , padding: 10}}>
      <div>
        <span>{title}</span>
      </div>
      {children}
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style= {handle.style}
        ></Handle>
      ))}
    </div>
  );
};

export default BaseNode;
