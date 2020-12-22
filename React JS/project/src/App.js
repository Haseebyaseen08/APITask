import React from 'react';
import './App.css';
import Header from './Pages/Header';
import About from "./Pages/About";
import Product from "./Pages/product";
import Items from "./Pages/itemShow";
import {BrowserRouter as Router,Route} from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Header}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/product" component={Product}></Route>
          <Route path="/itemShow" component={Items}></Route>
        </div>
      </Router>
      
    );
  }
}

export default App;
