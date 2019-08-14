import React, { useState, useEffect } from 'react';
import uploadIcon from '../../assets/upload.png';
import { Category } from '../';
import {
    GroupWrapper,
    GroupImage,
    GroupName,
    GroupCount,
    GroupContent
} from './Group.style';

const Group = ({ data }) => {
    const [groupSum, setGroupSum] = useState(0);
    const [hideCategory, setHideCategory] = useState(false);

    useEffect(() => {
        data.content.map(key => setGroupSum(key.content.length));
        console.log('data', data.content.length);
    }, [data]);

    return (
        <GroupWrapper>
            <div onClick={() => setHideCategory(!hideCategory)}>
                <GroupImage>
                    <img
                        height={30}
                        alt="upload"
                        width={30}
                        src={
                            data.content[
                                Math.floor(
                                    Math.random() *
                                        Math.floor(data.content.length - 1)
                                )
                            ].content[
                                Math.floor(
                                    Math.random() *
                                        Math.floor(data.content.length - 1)
                                )
                            ]
                        }
                    />
                </GroupImage>
                <GroupName>{data.name}</GroupName>
                <GroupCount>
                    {data.content.length !== 0 ? (
                        <p>{groupSum} items</p>
                    ) : (
                        <div>
                            <span>
                                <img
                                    height={30}
                                    alt="upload"
                                    width={30}
                                    src={uploadIcon}
                                />
                            </span>
                        </div>
                    )}
                </GroupCount>
            </div>
            <div>
                {hideCategory ? (
                    <GroupContent>
                        {data.content.map((key, index) => (
                            <Category data={key} key={index} />
                        ))}
                    </GroupContent>
                ) : null}
            </div>
        </GroupWrapper>
    );
};

export default Group;
