import React from "react";
import "./App.css"
import Home from "./pages/Home/Index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const App = () => {
  return (
    <div className="App-header">
      <Router>
        <Home />
      </Router>
    </div>
  );
};

export default App;
