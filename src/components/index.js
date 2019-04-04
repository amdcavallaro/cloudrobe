import React, { Component } from "react";
import Category from "./category";

let categories = [{ name: "top", count: 0 }, { name: "bottoms", count: 1 }];

class Index extends Component {
  render() {
    return (
      <div>
        <p>WARDROBEY LOGO</p>
        {categories.map(key, value) => (
          <Category category={key} />
        ))}

        {this.props.clothes == 0
          ? "I DISPLAY CLOTHES!!!1 "
          : "Add Image - upload button"}
      </div>
    );
  }
}

export default Index;
