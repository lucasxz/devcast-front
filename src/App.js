import React from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';

function App() {
  return (
    <div class="container">
      <Navbar/>
      <switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </switch>
    </div>
  )
}

export default App;
