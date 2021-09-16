import React from "react";
import logo from "../images/aaa.jpeg";
import Line from '../line/line';
import Slogan from "../slogan/slogan";
import About from "../about/about.jsx";
import Store from '../store.jsx/store';
import Nav from "../navbar/nav";



function Card(){
  return(

<div class="container p-3 my-3 border">
  <div class="card" style={{width: "500px;"}}>
   
<div class="row no-gutters">
          <div class="col-sm-5">
            <center>
            <Slogan />
              </center>
          </div>
          <div class="col-sm-7">
              <div class="card-body">
            <About />
              </div>
          </div>
</div>
</div>
</div>


  )
}




export default Card;