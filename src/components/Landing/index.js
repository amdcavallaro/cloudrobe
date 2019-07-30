import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';;
// import "./App/App.css";

class LandingPage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My stylist</h1>
        </header>
        <h2> Let's make this landing page beautiful</h2>
      </div>
    );
  }
}

export default LandingPage;
