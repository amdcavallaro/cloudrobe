import React, { Component } from "react";
import Group from "./group";
import { config } from "../firebase/config.js";

//config
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

firebase.initializeApp(config);

const db = firebase.database().ref();

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    // loads data
    let results = db;
    results.on("value", snapshot => {
      snapshot.forEach(data => {
        this.setState({ data: data.val() });
      });
    });
  }

  render() {
    return (
      <div>
        <h2> My wardrobe </h2>
        {this.state.data.map((currentItem, index) => (
          <Group key={index} data={currentItem} />
        ))}
        <div id="firebaseui-auth-container" />
      </div>
    );
  }
}

export default Index;
