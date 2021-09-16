import React from "react";
import logo from "./aaar.png";


function Nav(){
  return(
    <header>
    {/* <!-- Fixed navbar --> */}
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-white">
      <img src={logo} style={{width: "50px"}}></img>
    </nav>
  </header>
  )
}

export default Nav;