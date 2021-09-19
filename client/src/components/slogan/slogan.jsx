import React from "react";
import "./slogan.css";


function Slogan(props){
  return(

<div className="typewriter">
  <h1 style={{color: "black"}}>{props.heading}</h1>
</div>    
)
}

export default Slogan;
