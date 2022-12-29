import "./App.css"
import React, { useState } from "react";
import ResponsiveAppBar from "./Components/NavBar";
import FrontPageAnimation from "./Components/StartUpAnimation/FrontPageAnimation";
import CardHolder from "./Components/Card/CardHolder";
import Preloader from "./Components/PreLoader/Preloader";
import AboutMe from "./Components/About Me/AboutMe";
import CartProvider from "./Components/Store/CartProvider";
function App() {
  const [preloader, setpreloader] = useState(true);
  setTimeout(() => {
    setpreloader(false);
  }, 1400);


  
  

  return <CartProvider>
    {preloader && <Preloader />}
    {!preloader && <React.Fragment>
      <FrontPageAnimation />
      <ResponsiveAppBar />
      <AboutMe />
      <CardHolder />
    </React.Fragment>}
  </CartProvider>
}

export default App;

