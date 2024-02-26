import React from "react";
import { Route, Routes } from "react-router-dom";

import Nav from "./Components/Nav";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import Services from "./pages/Services";

function App() {
  return (
    <div className="App">
      <header>
        <Nav></Nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/projets" element={<Projets />}></Route>
        </Routes>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
