import Navbar from "../components/Navbar";
import "../styles/Mathematicians.css";

const mathematicians = [
  {
    name: "Aryabhata",
    year: "476 CE",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Aryabhata.jpg",
    contribution:
      "Developed astronomical calculations, estimated the value of π, and advanced the place value system."
  },
  {
    name: "Brahmagupta",
    year: "598 CE",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Brahmagupta.jpg",
    contribution:
      "Established mathematical rules for zero and negative numbers."
  },
  {
    name: "Bhāskara II",
    year: "1114 CE",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Bhaskara_II.jpg",
    contribution:
      "Author of Lilavati and made major contributions to algebra and astronomy."
  },
  {
    name: "Pingala",
    year: "300 BCE",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Pingala.jpg",
    contribution:
      "Explained binary numbers and combinatorics in ancient India."
  }
];

function Mathematicians() {
  return (
    <>
      <Navbar />

      <div className="math-page">

        <h1>👨‍🏫 Great Indian Mathematicians</h1>

        <div className="math-grid">

          {mathematicians.map((person) => (

            <div className="math-card" key={person.name}>

              <img src={person.image} alt={person.name} />

              <h2>{person.name}</h2>

              <h4>{person.year}</h4>

              <p>{person.contribution}</p>

            </div>

          ))}

        </div>

      </div>
    </>
  );
}

export default Mathematicians;