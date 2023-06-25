import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
