import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Explorer.css";

function Explorer() {
  const [number, setNumber] = useState("");

  // Indian Number Format
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

  // International Number Format
  const formatInternational = (num) => {
    if (!num) return "";
    return Number(num).toLocaleString("en-US");
  };

  // Devanagari Numerals
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

  // Brahmi Numerals
  const toBrahmi = (num) => {
    const brahmi = {
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
      .map((d) => brahmi[d] || d)
      .join(" ");
  };

  // Number to Words
  const numberToWords = (num) => {
    if (!num) return "";

    const ones = [
      "",
      "One","Two","Three","Four","Five",
      "Six","Seven","Eight","Nine","Ten",
      "Eleven","Twelve","Thirteen","Fourteen","Fifteen",
      "Sixteen","Seventeen","Eighteen","Nineteen"
    ];

    const tens = [
      "",
      "",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety"
    ];

    const convertBelow1000 = (n) => {
      let str = "";

      if (n >= 100) {
        str += ones[Math.floor(n / 100)] + " Hundred ";
        n %= 100;
      }

      if (n >= 20) {
        str += tens[Math.floor(n / 10)] + " ";
        n %= 10;
      }

      if (n > 0) {
        str += ones[n] + " ";
      }

      return str.trim();
    };

    let number = parseInt(num);

    if (number === 0) return "Zero";

    let result = "";

    const crore = Math.floor(number / 10000000);
    number %= 10000000;

    const lakh = Math.floor(number / 100000);
    number %= 100000;

    const thousand = Math.floor(number / 1000);
    number %= 1000;

    if (crore)
      result += convertBelow1000(crore) + " Crore ";

    if (lakh)
      result += convertBelow1000(lakh) + " Lakh ";

    if (thousand)
      result += convertBelow1000(thousand) + " Thousand ";

    if (number)
      result += convertBelow1000(number);

    return result.trim();
  };

  return (
    <>
      <Navbar />

      <div className="explorer-page">
        <h1>🔢 Number Explorer</h1>

        <p className="subtitle">
          Explore Indian, International and Ancient Numeral Systems
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
              <h2>🌍 International Number Format</h2>
              <p>{formatInternational(number)}</p>
            </div>

            <div className="card">
              <h2>🇮🇳 Indian Number Format</h2>
              <p>{formatIndian(number)}</p>
            </div>

            <div className="card">
              <h2>📝 Number in Words</h2>
              <p>{numberToWords(number)}</p>
            </div>

            <div className="card">
              <h2>🕉️ Devanagari Numerals</h2>
              <p>{toDevanagari(number)}</p>
            </div>

            <div className="card">
              <h2>🏛 Brahmi Numerals</h2>
              <p>{toBrahmi(number)}</p>
            </div>

            <div className="card">
              <h2>💡 Did You Know?</h2>

              <p>
                The Indian Number System uses the grouping
                <strong> 3-2-2 </strong>
                (Thousand → Lakh → Crore),
                while the International System uses
                <strong> 3-3-3</strong>.
              </p>
            </div>

          </div>
        )}
      </div>
    </>
  );
}

export default Explorer;