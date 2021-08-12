import './App.css';
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./component/LandingPage";
import Home from './component/Home';
import FormCreate from "./component/FormCreate"
import Detail from './component/Detail';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={Home}/>
      <Route path="/activity" component={FormCreate}/>
      <Route path="/countries/:id" component={Detail}/>


    </div>
  </BrowserRouter>
   
  );
}

export default App;
