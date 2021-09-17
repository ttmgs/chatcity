import React, {useEffect} from "react";
import Slogan from "../slogan/slogan";
import Store from '../store.jsx/store';
import "../styles/styles.css";
import Aos from "aos";
import "aos/dist/aos.css";


function Card(props){

  useEffect(() => {
    Aos.init({ duration: 1000});
  }, [])
  


  return(
<div className="container p-3 my-3 border">
  <div className="card">
   
  <div data-aos="fade-left">
<div className="row no-gutters">
          <div className="col-sm-5">
          </div>
          <div className="col-sm-5">
              <div className="card-body">
              <div id="about">
               <Slogan heading={props.heading} />
               <h5 id="aboutp">
               {props.text}
               </h5>
                </div>              
                </div>
          </div>
          <div className="col-sm-5">
              <div className="card-body">
              </div>
          </div>
</div>
</div>
</div>
</div>


  )
}




export default Card;



