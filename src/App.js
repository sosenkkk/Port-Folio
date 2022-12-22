import "./App.css"
import React from "react";
import ResponsiveAppBar from "./Components/NavBar";
import FrontPageAnimation from "./Components/StartUpAnimation/FrontPageAnimation";
import CardHolder from "./Components/Card/CardHolder";
function App() {
  return <div>
    <FrontPageAnimation />
    <ResponsiveAppBar />
    <CardHolder/>
  </div>
}

export default App;

