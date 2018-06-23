import React, { Component } from 'react';
import '../css/app.css';
import Header from './header';
import LandingPage from './landing-page';
import BodyContext from './bodycontext.js';
import Signup from'./signup.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LandingPage />
        <BodyContext />
        <Signup />
      </div>
    );
  }
}

export default App;
