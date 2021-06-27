import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { Component } from 'react';
import MovieList from './components/MovieList';
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/NavBar';


class App extends Component{
    
  render()
  
  {
    return (
    <div className="App AppMovie">
      <header className="App-header">
       
        <Switch>
          <Route path='/' exact component={MovieList}/>
          <Route path= '/:id' component={Navbar}/>
        
        </Switch>
      </header>
    </div>
  );
}
}
export default App;