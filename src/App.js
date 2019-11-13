import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Navbar from './components/Navbar';



class App extends React.Component {
  render(){
      return (
        <div class="container all">
          <Navbar/>
          <switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
          </switch>
        </div>
      )
  }
}




export default App;
