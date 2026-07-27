import Navbar from "../components/Navbar";
import "../styles/Learn.css";

function Learn() {

  const timeline = [
    {
      year: "300 BCE",
      title: "Brahmi Numerals",
      symbol: "𑁧 𑁨 𑁩",
      description:
        "Brahmi numerals were among the earliest numeral symbols developed in ancient India. They laid the foundation for many numeral systems used today."
    },
    {
      year: "499 CE",
      title: "Aryabhata",
      symbol: "0 1 2 3",
      description:
        "Aryabhata introduced revolutionary ideas in mathematics and astronomy, including place value concepts."
    },
    {
      year: "628 CE",
      title: "Brahmagupta",
      symbol: "0",
      description:
        "Brahmagupta explained arithmetic operations involving zero and negative numbers."
    },
    {
      year: "1200 CE",
      title: "Spread Across the World",
      symbol: "1 2 3 4",
      description:
        "Indian numerals travelled through Arab scholars and later became the modern decimal numeral system."
    },
    {
      year: "Today",
      title: "Modern Indian Number System",
      symbol: "1,00,000",
      description:
        "India continues using lakh, crore and the Indian place value system in everyday life."
    }
  ];

  const mathematicians = [
    {
      name: "Aryabhata",
      year: "476 CE",
      work: "Calculated π, proposed Earth's rotation, and advanced algebra and astronomy."
    },
    {
      name: "Brahmagupta",
      year: "598 CE",
      work: "Established mathematical rules for zero and negative numbers."
    },
    {
      name: "Bhaskara II",
      year: "1114 CE",
      work: "Made significant contributions to algebra, calculus and astronomy."
    },
    {
      name: "Pingala",
      year: "200 BCE",
      work: "Introduced binary-like concepts while studying poetic meters."
    }
  ];

  return (
    <>
      <Navbar />

      <div className="learn-page">

        <section className="learn-hero">

          <h1>📚 Learn the Indian Number System</h1>

          <p>
            Travel through over 2,000 years of India's mathematical journey,
            from Brahmi numerals to the modern Indian Number System.
          </p>

        </section>

        <section>

          <h2 className="section-title">
            🏛️ Evolution Timeline
          </h2>

          <div className="timeline">

            {timeline.map((item, index) => (

              <div className="timeline-card" key={index}>

                <span className="year">
                  {item.year}
                </span>

                <h3>{item.title}</h3>

                <div className="symbol">
                  {item.symbol}
                </div>

                <p>{item.description}</p>

              </div>

            ))}

          </div>

        </section>

        <section className="facts">
                    <h2 className="section-title">
            👨‍🏫 Great Indian Mathematicians
          </h2>

          <div className="mathematician-grid">

            {mathematicians.map((person, index) => (

              <div className="mathematician-card" key={index}>

                <h3>{person.name}</h3>

                <span>{person.year}</span>

                <p>{person.work}</p>

              </div>

            ))}

          </div>

        </section>

        <section className="did-you-know">

          <h2>💡 Did You Know?</h2>

          <div className="fact-box">

            <p>
              The symbol <strong>0 (Zero)</strong> was developed and
              mathematically explained in ancient India by
              <strong> Brahmagupta</strong>.
            </p>

          </div>

          <div className="fact-box">

            <p>
              The Indian Number System uses
              <strong> Lakh</strong> and
              <strong> Crore</strong>, unlike the International Number System
              which uses Millions and Billions.
            </p>

          </div>

          <div className="fact-box">

            <p>
              Indian mathematics influenced the entire world through the
              decimal place-value system that is still used today.
            </p>

          </div>

        </section>

      </div>

    </>
  );
}

export default Learn;
        