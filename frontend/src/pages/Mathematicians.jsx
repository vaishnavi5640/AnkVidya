import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Mathematicians.css";

function Mathematicians() {

  const people = [
    {
      icon: "📐",
      name: "Aryabhata",
      years: "476 CE – 550 CE",
      title: "Father of Indian Mathematics",
      description:
        "Aryabhata made remarkable contributions to mathematics and astronomy. His work on place value, trigonometry, and planetary motion influenced scholars across the world."
    },
    {
      icon: "0️⃣",
      name: "Brahmagupta",
      years: "598 CE – 668 CE",
      title: "The Pioneer of Zero",
      description:
        "Brahmagupta established mathematical rules for zero and negative numbers, laying the foundation of modern arithmetic."
    },
    {
      icon: "📖",
      name: "Bhaskara II",
      years: "1114 CE – 1185 CE",
      title: "Master of Algebra",
      description:
        "Bhaskara II wrote the famous books Lilavati and Bijaganita. His work advanced algebra, geometry, astronomy and early calculus."
    },
    {
      icon: "💻",
      name: "Pingala",
      years: "Around 200 BCE",
      title: "Early Binary Thinker",
      description:
        "Pingala introduced binary-like mathematical concepts while studying Sanskrit poetic meters, centuries before modern computers."
    }
  ];

  return (
    <>
      <Navbar />

      <div className="math-page">

        <div className="math-header">
          <h1>👨‍🏫 Great Indian Mathematicians</h1>

          <p>
            Meet the legendary scholars whose discoveries shaped mathematics
            and inspired generations across the world.
          </p>
        </div>

        <div className="math-grid">

          {people.map((person) => (

            <div className="math-card" key={person.name}>

              <div className="math-icon">
                {person.icon}
              </div>

              <div className="math-content">

                <h2>{person.name}</h2>

                <span className="years">
                  {person.years}
                </span>

                <h3>{person.title}</h3>

                <p>{person.description}</p>

              </div>

            </div>

          ))}

        </div>

      </div>
<Footer />
    </>
  );
}

export default Mathematicians;