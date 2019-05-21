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
    const { hideCategoryItem, randomItem } = this.state;
    const { data } = this.props;
    return (
      <div>
        <div
          onClick={() =>
            this.setState({
              hideCategoryItem: !hideCategoryItem
            })
          }
        >
          <img
            alt=""
            height={50}
            width={75}
            src={data.content[randomItem]}
          />
          <div>
            {`${data.name} ${data.content.length}`}
          </div>
        </div>
        <div>
          {this.state.hideCategoryItem
            ? data.content.map(item => (
                <img height={100} width={125} key={item} alt="" src={item} />
              ))
            : null}
        </div>
      </div>
    );
  }
}
export default Category;
