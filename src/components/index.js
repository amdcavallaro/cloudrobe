import React, { Component } from "react";
import Group from "./group";

let groups = [{ name: "top", count: 0 }, { name: "bottoms", count: 1 }];

let data = [
  {
    name: "shoes",
    content: [
      { name: "boots", count: 2 },
      { name: "trainers", count: 4 },
      { name: "slippers", count: 2 }
    ]
  },
  {
    name: "gym",
    content: [{ name: "top", count: 0 }, { name: "bottoms", count: 1 }]
  }
];

class Index extends Component {
  render() {
    return (
      <div>
        <p>WARDROBEY LOGO</p>
        {data.map((key, value) => (
          <Group data={key} />
        ))}

        {this.props.clothes == 0
          ? "I DISPLAY CLOTHES!!!1 "
          : "Add Image - upload button"}
      </div>
    );
  }
}

export default Index;
