import React, { Component } from "react";
import "./App.css";
import Index from "./components/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: 0
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Index clothes={this.state.clothes} />
      </div>
    );
  }
}

export default App;
