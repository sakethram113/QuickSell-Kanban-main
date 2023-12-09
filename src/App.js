import "./App.css";
import React from "react";
import DisplayBar from "./components/DisplayBar/DisplayBar";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
    <div className='home'>
      <DisplayBar/>
      <Card />
      <Card />
      <Card />
    </div>
    </>
  );
}

export default App;
