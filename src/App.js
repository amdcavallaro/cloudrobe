import React, { Component } from "react";
import "./App.css";
import Index from "./components/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: 0,
      shown: true
    };
  }

  toggle() {
    this.setState({
      shown: !this.state.shown
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My stylist</h1>
        </header>
        <Index clothes={this.state.clothes} />
      </div>
    );
  }
}

export default App;
