import "./App.css"
import React, { useState } from "react";
import ResponsiveAppBar from "./Components/NavBar";
import FrontPageAnimation from "./Components/StartUpAnimation/FrontPageAnimation";
import CardHolder from "./Components/Card/CardHolder";
import Preloader from "./Components/PreLoader/Preloader";
import AboutMe from "./Components/About Me/AboutMe";
import CartProvider from "./Components/Store/CartProvider";
import Footer from "./Components/Footer/Footer";

function App() {

  const [preloader, setpreloader] = useState(true);
  setTimeout(() => {
    setpreloader(false);
  }, 1400);


  const moveHandler=(event)=>{
    let scrolledElement= document.getElementById(event);
    console.log(scrolledElement);
    scrolledElement.scrollIntoView({behavior:'smooth'});
  };



  return <CartProvider>
    {preloader && <Preloader />}
    {!preloader && <React.Fragment>
      <FrontPageAnimation />
      <ResponsiveAppBar onButtonClick={moveHandler} />
      <div  className="encloser-div" >
        <AboutMe />
        <CardHolder />
      </div>
      <Footer />
    </React.Fragment>}
  </CartProvider>
}

export default App;

