import React, { useEffect } from "react";
import logo from "../images/aaa.jpeg";
import Line from '../line/line';
import Slogan from "../slogan/slogan";
import Store from '../store.jsx/store';
import Nav from "../navbar/nav";
import "../styles/styles.css";


function Card(props){



  return(
<div class="container p-3 my-3 border">
  <div class="card">
   
<div class="row no-gutters">
          <div class="col-sm-5">
          </div>
          <div class="col-sm-5">
              <div class="card-body">
              <div id="about">
               <Slogan heading={props.heading} />
               <h5 id="aboutp">
               {props.text}
               </h5>
                </div>              
                </div>
          </div>
          <div class="col-sm-5">
              <div class="card-body">
              </div>
          </div>
</div>
</div>
</div>


  )
}




export default Card;



