import React, { Component } from "react";
import Group from "./group";

let data = [
  {
    name: "shoes",
    content: [
      {
        name: "boots",
        content: [
          "https://media.dollskill.com/media/VgkZ1komYitGXz6zGtFWwHJArvJB0xxH-34.jpg",
          "https://www.lulus.com/images/product/xlarge/3163990_373542.jpg?w=560",
          "https://media.dollskill.com/media/H9478dpg9lqUgFpf7kH8PQ1IyFdLRHz0-33.jpg"
        ]
      },
      {
        name: "trainers",
        content: [
          "https://media.dollskill.com/media/VgkZ1komYitGXz6zGtFWwHJArvJB0xxH-34.jpg",
          "https://www.lulus.com/images/product/xlarge/3163990_373542.jpg?w=560",
          "https://media.dollskill.com/media/H9478dpg9lqUgFpf7kH8PQ1IyFdLRHz0-33.jpg"
        ]
      },
      {
        name: "slippers",
        content: [
          "https://media.dollskill.com/media/VgkZ1komYitGXz6zGtFWwHJArvJB0xxH-34.jpg",
          "https://www.lulus.com/images/product/xlarge/3163990_373542.jpg?w=560",
          "https://media.dollskill.com/media/H9478dpg9lqUgFpf7kH8PQ1IyFdLRHz0-33.jpg"
        ]
      }
    ]
  },
  {
    name: "gym",
    content: [
      {
        name: "top",
        content: [
          "https://media.dollskill.com/media/VgkZ1komYitGXz6zGtFWwHJArvJB0xxH-34.jpg",
          "https://www.lulus.com/images/product/xlarge/3163990_373542.jpg?w=560",
          "https://media.dollskill.com/media/H9478dpg9lqUgFpf7kH8PQ1IyFdLRHz0-33.jpg"
        ]
      },
      {
        name: "bottoms",
        content: [
          "https://media.dollskill.com/media/VgkZ1komYitGXz6zGtFWwHJArvJB0xxH-34.jpg",
          "https://www.lulus.com/images/product/xlarge/3163990_373542.jpg?w=560",
          "https://media.dollskill.com/media/H9478dpg9lqUgFpf7kH8PQ1IyFdLRHz0-33.jpg"
        ]
      }
    ]
  }
];

class Index extends Component {
  render() {
    return (
      <div>
        <h2> My wardrobe</h2>
        {data.map((key, value) => (
          <Group data={key} />
        ))}
      </div>
    );
  }
}

export default Index;
