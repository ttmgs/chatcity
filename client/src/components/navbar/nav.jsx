import React from "react";
import logo from "./aaar.png";


function Nav(){
  return(
    <header>
    {/* <!-- Fixed navbar --> */}
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-white">
      <img src={logo} style={{width: "70px"}}></img>
      <div style={{margin: "auto"}}>
      <h1>Know your city</h1>
      </div>
    </nav>
  </header>
  )
}

export default Nav;