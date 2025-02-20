import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./CSSfile/Contactus.css";

export default function Contactus() {
  let [shownum, setnum] = useState("");
  let [showa, seta] = useState(false);

  const handel = () => {
    if (shownum.length === 10) {
      seta(true);
    } else {
      alert("Enter number 10 digit");
    }
  };

  return (
    <div>
      <Header />
      <div>
        <div className={showa ? "box1" : "box"}>
          <h1>Thanku</h1>
          <Link to="/">
            <button className="butn">Ok</button>
          </Link>
        </div>
      </div>
      <div className="form">
        <h1 className="head">Contact us</h1>
        <input type="text" placeholder="Enter Name" /> <br />
        <input type="email" placeholder="Enter Email" />
        <br />
        <input
          type="number"
          onChange={(e) => setnum(e.target.value)}
          value={shownum}
          placeholder="Enter Your contatct number"
        />
        <br />
        <button type="submit" onClick={handel}>
          Submit
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </div>
  );
}
