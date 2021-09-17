import './App.css';
import Card  from "./components/card/card";
import Footer from "./components/footer/footer.jsx";
import Nav from './components/navbar/nav';
import details from "./components/details/details";



function App() {
  return (

<div>
  <Nav />
<Card heading={details[0].heading} text={details[0].description}/>
<Card heading={details[1].heading} text={details[1].description}/>

<Footer />
</div>

  );
}

export default App;

