import React, { Component } from "react";
import uploadIcon from "../upload.png";
import Category from "./category";

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupSum: 0,
      hideCategory: false,
      hideCategoryItem: false
    };
  }

  componentDidMount() {
    this.props.data.content.map(key =>
      this.setState(previous => ({
        groupSum: (previous.groupSum += key.content.length)
      }))
    );
  }
  render() {
    return (
      <div className="group">
        <div
          onClick={() =>
            this.setState({ hideCategory: !this.state.hideCategory })
          }
        >
          <div className="group-image">
            <img
              height={30}
              alt="upload"
              width={30}
              src={
                this.props.data.content[
                  Math.floor(Math.random() * Math.floor(2))
                ].content[Math.floor(Math.random() * Math.floor(2))]
              }
            />
          </div>
          <div className="group-name">{this.props.data.name}</div>
          <div className="group-count">
            {this.props.data.content.length !== 0 ? (
              <p>{this.state.groupSum} items</p>
            ) : (
              <div>
                <span>
                  <img height={30} alt="upload" width={30} src={uploadIcon} />
                </span>
              </div>
            )}
          </div>
        </div>
        <div>
          {this.state.hideCategory ? (
            <div className="group-content">
              {this.props.data.content.map((key, index) => (
                <Category data={key} key={index}/>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Group;
