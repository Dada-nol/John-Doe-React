import React from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ML from "./pages/ML";
import Profil from "./pages/Profil";
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
          <Route path="/ml" element={<ML />}></Route>
          <Route path="/profil" element={<Profil />}></Route>
        </Routes>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
