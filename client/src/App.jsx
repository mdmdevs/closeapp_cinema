import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
