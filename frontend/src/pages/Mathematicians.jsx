import "../styles/Mathematicians.css";

function Mathematicians() {
  const people = [
    {
      name: "Aryabhata",
      years: "476 CE – 550 CE",
      info: "Ancient Indian mathematician and astronomer. He wrote Aryabhatiya and made important contributions to mathematics and astronomy.",
    },
    {
      name: "Brahmagupta",
      years: "598 CE – 668 CE",
      info: "Known for explaining the mathematical rules of zero and negative numbers in Brahmasphutasiddhanta.",
    },
    {
      name: "Bhaskara II",
      years: "1114 CE – 1185 CE",
      info: "Author of Lilavati and Bijaganita. He made remarkable contributions to algebra, arithmetic and astronomy.",
    },
    {
      name: "Pingala",
      years: "3rd–2nd Century BCE",
      info: "Ancient scholar whose work on poetic meters introduced concepts similar to the binary number system.",
    },
  ];

  return (
    <div className="math-page">
      <h1>👨‍🏫 Great Indian Mathematicians</h1>

      <div className="math-grid">
        {people.map((person) => (
          <div className="math-card" key={person.name}>
            <div className="symbol">🧮</div>

            <h2>{person.name}</h2>

            <h4>{person.years}</h4>

            <p>{person.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mathematicians;