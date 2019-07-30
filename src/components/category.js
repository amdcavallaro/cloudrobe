import React from "react";
import FileUploader from "react-firebase-file-uploader";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.writeUserData = this.writeUserData.bind(this);
    this.state = {
      hideCategoryItem: false,
      Item: 0
    };
  }

  countFirebaseNode() {
    window.firebase
      .database()
      .ref("data/0/content/0/content/")
      .on("value", snap => {
        var totalRecord = snap.numChildren();
        console.log("Total Record : " + totalRecord);
      });
  }

  writeUserData(imageUrl) {
    return window.firebase
      .database()
      .ref("data/0/content/0/content/")
      .update({ current_value: imageUrl });
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
    const baseUrl =
      "https://firebasestorage.googleapis.com/v0/b/my-wardrobe-b2959.appspot.com/o/images%2F";

    return (
      <div>
        {this.countFirebaseNode()}
        <div
          className="item"
          onClick={() =>
            this.setState({
              hideCategoryItem: !hideCategoryItem
            })
          }
        >
          <label
            style={{
              backgroundColor: "steelblue",
              color: "white",
              padding: 5,
              borderRadius: 4,
              pointer: "cursor"
            }}
          >
            Add
            <FileUploader
              hidden
              accept="image/*"
              storageRef={window.firebase.storage().ref("images")}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={(...args) => {
                let item = encodeURI(args[0]);
                let url = baseUrl + item + "?alt=media";
                this.writeUserData(url);
              }}
              onProgress={this.handleProgress}
            />
          </label>

          <img alt="" height={50} width={75} src={data.content[randomItem]} />
          <div>{`${data.name} ${data.content.length}`}</div>
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
