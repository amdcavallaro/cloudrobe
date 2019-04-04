import React, { Component } from "react";

class Group extends Component {
  render() {
    let sumCount = 0;
    console.log("Count", this.props.data.content);
    return (
      <div>
        this.props.data.content.map
        <div className="group-name">{this.props.data.name}</div>
        <div className="group-count">
          {/* {(sumCount += this.props.data.content.count)} */}
        </div>
      </div>
    );
  }
}

export default Group;
