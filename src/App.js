import React from "react";
import Header from "./Header"
import "./App.css"
import Para from "./Para";
import Musicvideos from "./Musicvideos";
import Songname from "./Songdetails";

function App() {
  return (
    <div className="App">
          <Header/>
          <Para/>
          <Songname/>
          <Musicvideos/>
    </div>
  )
}

export default App;
