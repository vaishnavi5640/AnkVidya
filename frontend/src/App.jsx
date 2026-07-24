import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Explorer from "./pages/Explorer";
import Mathematicians from "./pages/Mathematicians";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/explorer" element={<Explorer />} />
        <Route path="/mathematicians" element={<Mathematicians />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;