import React from "react"

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Feature from "./pages/Feature";
import About from "./pages/About";
import Blogs from "./pages/Blogs";

function App() {
  return  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/feature" element={<Feature/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/blogs" element={<Blogs/>} />
  </Routes>
}

export default App;
