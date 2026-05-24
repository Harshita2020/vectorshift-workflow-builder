import React from "react";
import { Handle } from "reactflow";

const BaseNode = ({ title, handles, children }) => {
  return (
    <div
      style={{
        width: 240,
        minHeight: 120,
        background: "#ffffff",
        border: "1px solid #d4d4d8",
        borderRadius: "14px",
        padding: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Title */}
      <div
        style={{
          fontSize: "18px",
          fontWeight: "700",
          color: "#18181b",
          borderBottom: "1px solid #f1f5f9",
          paddingBottom: "8px",
        }}
      >
        {title}
      </div>

      {/* Node Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {children}
      </div>

      {/* Handles */}
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={{
            width: "12px",
            height: "12px",
            background: "#6366f1",
            border: "2px solid white",
            ...handle.style,
          }}
        />
      ))}
    </div>
  );
};

export default BaseNode;