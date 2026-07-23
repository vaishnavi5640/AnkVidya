import { useState } from "react";
import Navbar from "../components/Navbar";

function Explorer() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const convertIndianFormat = (num) => {
    const x = num.toString();

    if (x.length <= 3) return x;

    const lastThree = x.substring(x.length - 3);
    const otherNumbers = x.substring(0, x.length - 3);

    const formatted =
      otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
      "," +
      lastThree;

    return formatted;
  };

  const handleConvert = () => {
    if (number === "") {
      setResult("");
      return;
    }

    setResult(convertIndianFormat(number));
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "700px",
          margin: "60px auto",
          textAlign: "center",
        }}
      >
        <h1>🔢 Number Explorer</h1>

        <p style={{ margin: "20px 0" }}>
          Enter any number to see it in the Indian Number System.
        </p>

        <input
          type="number"
          placeholder="Enter a number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          style={{
            padding: "15px",
            width: "100%",
            fontSize: "18px",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        />

        <br />
        <br />

        <button
          onClick={handleConvert}
          style={{
            padding: "15px 40px",
            background: "#FF6B00",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Convert
        </button>

        {result && (
          <div
            style={{
              marginTop: "40px",
              padding: "25px",
              background: "white",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,.1)",
            }}
          >
            <h2>Indian Number Format</h2>

            <h1 style={{ color: "#1E3A8A", marginTop: "15px" }}>
              {result}
            </h1>
          </div>
        )}
      </div>
    </>
  );
}

export default Explorer;