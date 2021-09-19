import React from "react";
import logo from "./aaar.png";
import "../styles/styles.css";

function Nav(){

  return(
    <header>
    {/* <!-- Fixed navbar --> */}
    <div id="nav">
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-white">
      <img src={logo} style={{width: "70px"}}></img>
      <div style={{margin: "auto"}}>
      <h1>Know your city</h1>
      </div>
    </nav>
    </div>
  </header>
  )
}

export default Nav;