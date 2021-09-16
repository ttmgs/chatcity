import Image from './components/images/image';
import logo from "./components/images/aaa.jpeg";
import './App.css';
import Container  from "./components/container/container";
import Line from './components/line/line';
import Slogan from "./components/slogan/slogan";
import About from './components/about/about';
import Footer from './components/footer/footer';
import Store from './components/store.jsx/store';



function App() {
  return (

    <div>

  <div class="container bcontent">
  <hr />
  <div class="card" style={{width: "500px;"}}>
      <div class="row no-gutters">
          <div class="col-sm-5">
            <center>
              <img class="card-img" src={logo} style={{width: "250px"}} alt="Suresh Dasari Card" />
              </center>
          </div>
          <div class="col-sm-7">
            <Store />
            <center>
            <Slogan />
            </center>
              <div class="card-body">
              <About />
              </div>
          </div>
      </div>
  </div>
</div>
<Footer />
</div>

  );
}

export default App;
