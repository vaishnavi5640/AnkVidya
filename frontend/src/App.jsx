import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Explorer from "./pages/Explorer";
import Mathematicians from "./pages/Mathematicians";
import Quiz from "./pages/Quiz";
import AITutor from "./pages/AITutor";
import Game from "./pages/Game";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/explorer" element={<Explorer />} />
        <Route path="/mathematicians" element={<Mathematicians />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/aitutor" element={<AITutor />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;