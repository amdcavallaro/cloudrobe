import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import FileUploader from 'react-firebase-file-uploader';
import { CategoryItem } from './Category.style';
import { LABELS } from '../../constants/locale';

const Category = ({ data }) => {
    const [hideCategoryItem, setHideCategoryItem] = useState(false);
    const [item, setItem] = useState(0);

    useEffect(() => {
        setItem(
            Math.floor(Math.random() * Math.floor(data.content.length - 1))
        );
    }, []);

    const handleUploadStart = () => {
        // TODO add logic
    };

    const handleUploadError = () => {
        // TODO add logic
    };

    const handleProgress = () => {
        // TODO add logic
    };

    return (
        <div>
            <label
                style={{
                    backgroundColor: 'steelblue',
                    color: 'white',
                    padding: 10,
                    borderRadius: 4,
                    pointer: 'cursor'
                }}
            >
                {LABELS.pickAvatar}
                <FileUploader
                    hidden
                    accept="image/*"
                    storageRef={window.firebase.storage().ref('images')}
                    onUploadStart={handleUploadStart}
                    onUploadError={handleUploadError}
                    onUploadSuccess={(...args) => {
                        console.log(args);
                    }}
                    onProgress={handleProgress}
                />
            </label>

            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>{LABELS.dragNDrop}</p>
                        </div>
                    </section>
                )}
            </Dropzone>
            <CategoryItem>
                <div
                    className="item"
                    onClick={() => setHideCategoryItem(!hideCategoryItem)}
                >
                    <img
                        alt=""
                        height={50}
                        width={75}
                        src={data.content[item]}
                    />
                    <div>{`${data.name} ${data.content.length}`}</div>
                </div>
                <div>
                    {hideCategoryItem
                        ? data.content.map(item => (
                              <img
                                  height={100}
                                  width={125}
                                  key={item}
                                  alt=""
                                  src={item}
                              />
                          ))
                        : null}
                </div>
            </CategoryItem>
        </div>
    );
};
export default Category;
