import React from "react";
import "./App.css"
import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";


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
