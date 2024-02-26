import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import "./index.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projets from "./pages/Projets";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/projets">Réalisations</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/projets" element={<Projets />}></Route>
        </Routes>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
