import React, {useEffect} from 'react';
import './App.css';
import Card  from "./components/card/card";
import Footer from "./components/footer/footer.jsx";
import Nav from './components/navbar/nav';
import details from "./components/details/details";
import apple from "./components/images/apple.png";
import play from "./components/images/paly.png";
import connect from "./components/images/conn.png";
import applei from "./components/images/applei.png";
import goog from "./components/images/goog.png";
import comm from "./components/images/comm.jpeg";
import ap from "./components/images/ga.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (

<div>
  <Nav />
  <div data-aos="zoom-in-down"> 
<Card heading={details[0].heading} text={details[0].description} aimg={applei} bimg={goog}/>
</div>

<div data-aos="fade-down"> 
<Card heading={details[1].heading} aimg={connect} bimg={comm} text={details[1].description}/>
</div>
<div data-aos="fade-up"> 
<Card heading={details[2].heading} aimg={applei} bimg={goog}/>
</div>
<Footer />
</div>

  );
}

export default App;



// 
// add onscroll animations works
// add to portfolio



// pushed to heroku
// pushed to github




// * SSL certificate
// * 