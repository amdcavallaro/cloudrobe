import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import { CategoryItem } from './OldCategory.style';
import { LABELS } from '../../constants/locale';
import { ClothesImage, FileUploaderLabel } from '..';

const Category = ({ data }) => {
    const [hideCategoryItem, setHideCategoryItem] = useState(false);
    const [item, setItem] = useState(0);

    return (
        <div>
            {/* <FileUploaderLabel />
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
                <div onClick={() => setHideCategoryItem(!hideCategoryItem)}>
                    <ClothesImage
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
                              <ClothesImage
                                  height={100}
                                  width={125}
                                  key={item}
                                  alt=""
                                  src={item}
                              />
                          ))
                        : null}
                </div>
            </CategoryItem> */}
        </div>
    );
};
export default Category;
