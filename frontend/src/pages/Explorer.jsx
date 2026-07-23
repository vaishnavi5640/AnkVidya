import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Explorer.css";

function Explorer() {
  const [number, setNumber] = useState("");

  const formatIndian = (num) => {
    if (!num) return "";

    const x = num.toString();

    if (x.length <= 3) return x;

    const lastThree = x.slice(-3);
    const other = x.slice(0, -3);

    return (
      other.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
      "," +
      lastThree
    );
  };

  const formatInternational = (num) => {
    if (!num) return "";
    return Number(num).toLocaleString("en-US");
  };

  const toDevanagari = (num) => {
    const digits = {
      "0": "०",
      "1": "१",
      "2": "२",
      "3": "३",
      "4": "४",
      "5": "५",
      "6": "६",
      "7": "७",
      "8": "८",
      "9": "९",
      ",": ","
    };

    return num
      .toString()
      .split("")
      .map((d) => digits[d] || d)
      .join("");
  };

  return (
    <>
      <Navbar />

      <div className="explorer-page">

        <h1>🔢 Number Explorer</h1>

        <p className="subtitle">
          Learn the Indian Number System interactively.
        </p>

        <input
          className="number-input"
          type="number"
          placeholder="Enter any number..."
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        {number && (
          <div className="cards">

            <div className="card">
              <h2>🌍 International Format</h2>
              <p>{formatInternational(number)}</p>
            </div>

            <div className="card">
              <h2>🇮🇳 Indian Format</h2>
              <p>{formatIndian(number)}</p>
            </div>

            <div className="card">
              <h2>📝 Devanagari Numerals</h2>
              <p>{toDevanagari(number)}</p>
            </div>

            <div className="card">
              <h2>🏛 Ancient Numerals</h2>
              <p>
                Brahmi numeral support will be added in the next version.
              </p>
            </div>

            <div className="card">
              <h2>💡 Did You Know?</h2>
              <p>
                The Indian Number System uses the grouping
                <strong> 3-2-2 </strong>
                while the International System uses
                <strong> 3-3-3.</strong>
              </p>
            </div>

          </div>
        )}

      </div>
    </>
  );
}

export default Explorer;