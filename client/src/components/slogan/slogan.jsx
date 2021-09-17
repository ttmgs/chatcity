import React from "react";
import "./slogan.css";


function Slogan(props){
  return(

<div class="typewriter">
  <h4 style={{color: "black"}}>{props.heading}</h4>
</div>    
)
}

export default Slogan;
