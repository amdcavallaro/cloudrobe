import React from "react";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideCategoryItem: false,
      randomItem: 0
    };
  }

  componentDidMount() {
    this.setState({
      randomItem: Math.floor(
        Math.random() * Math.floor(this.props.data.content.length - 1)
      )
    });
  }

  render() {
    return (
      <div>
        <div className="item"
          onClick={() =>
            this.setState({
              hideCategoryItem: !this.state.hideCategoryItem
            })
          }
        >
          <img
            alt=""
            height={50}
            width={75}
            src={this.props.data.content[this.state.randomItem]}
          />
          <div>
            {`${this.props.data.name} ${this.props.data.content.length}`}
          </div>
        </div>
        <div>
          {this.state.hideCategoryItem
            ? this.props.data.content.map(item => (
                <img height={100} width={125} key={item} alt="" src={item} />
              ))
            : null}
        </div>
      </div>
    );
  }
}
export default Category;
