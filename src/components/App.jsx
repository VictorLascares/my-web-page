import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Works from "../pages/Works";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="works" element={<Works />} />
      </Routes>
    </div>
  );
}

export default App;
