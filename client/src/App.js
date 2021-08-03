import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import Landing from "../src/component/Landing";

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <Route exact path="/" component={Landing} />
    </div>
    </React.Fragment>
  );
}

export default App;
