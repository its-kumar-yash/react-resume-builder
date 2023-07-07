import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </Router>
  );
}

export default App;
