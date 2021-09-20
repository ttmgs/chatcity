import React from "react";
import "./slogan.css";


function Slogan(props){
  return(

<div id="wrap">
<div className="typewriter">
  <h4 style={{color: "black"}}>{props.heading}</h4>
</div>    
</div>
)
}

export default Slogan;
