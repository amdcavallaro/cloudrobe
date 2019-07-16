import React from "react";
import Dropzone from "react-dropzone";
import FileUploader from "react-firebase-file-uploader";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideCategoryItem: false,
      Item: 0
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
        <label
          style={{
            backgroundColor: "steelblue",
            color: "white",
            padding: 10,
            borderRadius: 4,
            pointer: "cursor"
          }}
        >
          Select your awesome avatar
          <FileUploader
            hidden
            accept="image/*"
            storageRef={window.firebase.storage().ref("images")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={(...args) => {
                console.log(args)
            }}
            onProgress={this.handleProgress}
          />
        </label>

        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone>

        <div
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
