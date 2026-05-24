import { useState } from "react";
import { useStore } from "./store";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nodes,
          edges,
        }),
      });

      const data = await response.json();

      setResult(data);
    } catch (error) {
      console.error("Submission error:", error);

      alert("Failed to submit pipeline.");
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <button
          onClick={handleSubmit}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            background: "#6366f1",
            color: "white",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </div>

      {result && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "12px",
              minWidth: "300px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          >
            <h2>Pipeline Analysis</h2>

            <p>
              <strong>Nodes:</strong> {result.num_nodes}
            </p>

            <p>
              <strong>Edges:</strong> {result.num_edges}
            </p>

            <p>
              <strong>Is DAG:</strong> {result.is_dag ? "Yes ✅" : "No ❌"}
            </p>

            <button
              onClick={() => setResult(null)}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                borderRadius: "8px",
                border: "none",
                background: "#6366f1",
                color: "white",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
