import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/menu/menu";

function App() {
  return (
    <div className="dashboard">
      <div className="left">
        <Menu />
      </div>
      <div className="center"></div>
      <div className="right"></div>
    </div>
  );
}

export default App;
