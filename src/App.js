import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Home from './component/Home'; 
import About from './component/About'; 
import Contact from './component/Contact'; 
import './App.css'; 

class App extends Component { 
render() { 
  return ( 
  <Router> 


  <div className="row">
  <div className="col-md-4" ><Link to="/">Főoldal</Link></div>
  <div className="col-md-4"  ><Link to="/about">Rólunk</Link></div>
  <div className="col-md-4"  ><Link to="/contact">Kapcsolat</Link>  </div>
  </div>
  

    <div > 

    {/*
      <ul > 
      <li> 
        <Link to="/">Főoldal</Link> 
      </li> 
      <li> 
        <Link to="/about">Rólunk</Link> 
      </li> 
      <li> 
        <Link to="/contact">Kapcsolat</Link> 
      </li> 
      </ul> 
 */}

      <Switch> 
      <Route exact path='/' component={Home}></Route> 
      <Route exact path='/about' component={About}></Route> 
      <Route exact path='/contact' component={Contact}></Route> 
      </Switch> 
    </div> 
  </Router> 
); 
} 
} 

export default App; 

