import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Demo from "./components/Demo";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import Home from "./components/pages/Home";

function App() {
  // const x = 11;
  // var text;

  // if (x === 10) {
  //   text = "Equal"
  // } else {
  //   text = "Not equal"
  // }

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      </BrowserRouter>
      {/* <h1 className="Demo"> Hello World </h1>
      <p style={{ backgroundColor: "black", color: "white", fontSize: "35px", textAlign: "center" }}>{50 + 5}</p>
      <h2>{text}</h2>
      <Demo para={x} /> */}
    </div>
  );
}

export default App;
