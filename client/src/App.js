import React, {useEffect} from 'react';
import './App.css';
import Card  from "./components/card/card";
import Footer from "./components/footer/footer.jsx";
import Nav from './components/navbar/nav';
import details from "./components/details/details";
import Aos from "aos";
import "aos/dist/aos.css";


function App() {

  useEffect(() => {
    Aos.init({ duration: 1000});
  }, [])
  


  return (

<div>
  <Nav />
<Card heading={details[0].heading} text={details[0].description}/>

<div data-aos="fade-left">
<Card heading={details[1].heading} text={details[1].description}/>
</div>

<Footer />
</div>

  );
}

export default App;




// add onscroll animations



// pushed to heroku
// pushed to github




// * SSL certificate
// * 
