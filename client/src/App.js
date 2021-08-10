import './App.css';
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./component/LandingPage";
import Home from './component/Home';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={Home}/>
    </div>
  </BrowserRouter>
   
  );
}

export default App;
