import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Home from "./views/Home";
import Article from "./views/Article";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <div className=''>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/:id/:slug' component={Article}/>
          </Switch>
          </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
