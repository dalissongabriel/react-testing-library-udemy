import { useState } from "react";
import "./App.css";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("red");
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "300px",
        margin: "0 auto",
        height: "100vh",
      }}
    >
      <button
        style={{
          backgroundColor: isDisabled ? "gray" : backgroundColor,
          color: "white",
          padding: "12px 16px",
          border: "none",
          borderRadius: "0.5rem",
          fontWeight: "bold",
          fontSize: "2rem",
          cursor: isDisabled ? "not-allowed" : "pointer",
        }}
        disabled={isDisabled}
        onClick={() =>
          setBackgroundColor((prev) => (prev === "red" ? "blue" : "red"))
        }
      >
        {backgroundColor === "red" ? "Change to blue" : "Change to red"}
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <input
          type="checkbox"
          id="disabled"
          name="Disabled"
          onClick={(e) => setIsDisabled(e.target.checked)}
          style={{ width: "1.3rem", height: "1.3rem", marginRight: "1.5rem" }}
        />
        <label
          htmlFor="disabled"
          style={{ fontSize: "1.2rem", cursor: "pointer" }}
        >
          Disabled
        </label>
      </div>
    </div>
  );
}

export default App;
