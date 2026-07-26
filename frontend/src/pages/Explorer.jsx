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

    return other.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree;
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
    };

    return num
      .toString()
      .split("")
      .map((d) => digits[d] || d)
      .join("");
  };

  const toBrahmi = (num) => {
    const digits = {
      "0": "𑁦",
      "1": "𑁧",
      "2": "𑁨",
      "3": "𑁩",
      "4": "𑁪",
      "5": "𑁫",
      "6": "𑁬",
      "7": "𑁭",
      "8": "𑁮",
      "9": "𑁯",
    };

    return num
      .toString()
      .split("")
      .map((d) => digits[d] || d)
      .join(" ");
  };

  const getPlaceValue = (num) => {
    const formatted = formatIndian(num);
    const parts = formatted.split(",");

    return {
      crore: parts.length === 4 ? parts[0] : "-",
      lakh: parts.length >= 3 ? parts[parts.length - 3] : "-",
      thousand: parts.length >= 2 ? parts[parts.length - 2] : "-",
      units: parts[parts.length - 1],
    };
  };

  const place = number ? getPlaceValue(number) : {};

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
          <>
            <div className="cards">
              <div className="card">
                <h2>🌍 International Format</h2>
                <p>{formatInternational(number)}</p>
              </div>

              <div className="card">
                <h2>🇮🇳 Indian Number Format</h2>
                <p>{formatIndian(number)}</p>
              </div>

              <div className="card">
                <h2>🕉️ Devanagari Numerals</h2>
                <p>{toDevanagari(number)}</p>
              </div>

              <div className="card">
                <h2>🏛️ Brahmi Numerals</h2>
                <p>{toBrahmi(number)}</p>
              </div>
            </div>

            <div className="place-value-box">
              <h2>📊 Indian Place Value Chart</h2>

              <table>
                <thead>
                  <tr>
                    <th>Crore</th>
                    <th>Lakh</th>
                    <th>Thousand</th>
                    <th>Units</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>{place.crore}</td>
                    <td>{place.lakh}</td>
                    <td>{place.thousand}</td>
                    <td>{place.units}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Explorer;