import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Travel from "./components/travel";
import Brussels from "./pictures/BXL.jpg";
import TLV from "./pictures/TLV.jpg";
import Barca from "./pictures/Barca.jpeg";

function App() {
  return (
    <div className="App">
      <header className="App-Header">
        <Travel
          name="Brussels"
          image={Brussels}
          link="https://goo.gl/maps/rzyXFmnPUBGMAsse9"
        ></Travel>
        <Travel
          name="TLV"
          image={TLV}
          alt="Tel Aviv"
          link="https://goo.gl/maps/9Btj2uqphon6JJY18"
        ></Travel>
        <Travel
          name="Barca"
          image={Barca}
          link="https://goo.gl/maps/9Btj2uqphon6JJY18"
        ></Travel>
      </header>
    </div>
  );
}

export default App;
