import React from "react";
import "../App.css";
import Trollface from "../images/Trollface.png";

export default function Header() {
  return (
    <header className="header">
      <img src={Trollface} className="header--image" alt="" />
      <h2 className="header--title">Meme Generator</h2>
    </header>
  );
}
