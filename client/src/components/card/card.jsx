import React, { useEffect } from "react";
import Slogan from "../slogan/slogan";
import Nav from "../navbar/nav";
import Footer from "../footer/footer";
import Store from "../store.jsx/store";
import "../styles/styles.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Card(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="main">
      <div id="container" class="container p-3 my-3 border">
        <div className="row no-gutters">
          <div className="speech-bubble">
          <Slogan heading={props.heading} />
          </div>
          <div id="text">
          <br></br>
            {props.text}
            </div>
          </div>
          <br></br>

  <div class="icolumn">
    <center>
  <a href="www.apple.com" alt="yeo"><img src={props.aimg} alt="apple" style={{ width: "100px"}}></img></a>
  <a href="www.apple.com" alt="yeo"><img src={props.bimg} alt="apple" style={{ width: "50px"}}></img></a>
  </center>
  </div>
        </div>
    </div>
  );
}

export default Card;


