import Navbar from "../components/Navbar";
import "../styles/Learn.css";

function Learn() {
  const timeline = [
    {
      year: "300 BCE",
      title: "Brahmi Numerals",
      description:
        "The Brahmi numeral system is one of the earliest known numeral systems in India."
    },
    {
      year: "499 CE",
      title: "Aryabhata",
      description:
        "Aryabhata introduced remarkable mathematical ideas and place-value concepts."
    },
    {
      year: "628 CE",
      title: "Brahmagupta",
      description:
        "Brahmagupta described arithmetic operations involving zero."
    },
    {
      year: "1200 CE",
      title: "Spread Worldwide",
      description:
        "Indian numerals spread through the Arab world into Europe."
    },
    {
      year: "Today",
      title: "Modern Indian Numeral System",
      description:
        "India continues to use lakh and crore in everyday life."
    }
  ];

  return (
    <>
      <Navbar />

      <div className="learn-page">

        <h1>📚 Learn Indian Numeral System</h1>

        <p className="intro">
          Explore the journey of Indian mathematics through time.
        </p>

        <div className="timeline">

          {timeline.map((item, index) => (

            <div className="timeline-card" key={index}>

              <h2>{item.year}</h2>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          ))}

        </div>

      </div>
    </>
  );
}

export default Learn;