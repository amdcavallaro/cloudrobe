import React, { useState, useEffect } from 'react';
import { Category, ClothesImage } from '../';
import {
    GroupWrapper,
    GroupImage,
    GroupName,
    GroupCount,
    GroupContent
} from './Group.style';
import { getRandomItem } from '../../utils/ItemsUtil';

const Group = ({ data }) => {
    const [groupSum, setGroupSum] = useState(0);
    const [hideCategory, setHideCategory] = useState(false);

    useEffect(() => {
        data.content.map(key => setGroupSum(key.content.length));
    }, [data]);

    return (
        <GroupWrapper>
            <div onClick={() => setHideCategory(!hideCategory)}>
                <GroupImage>
                    <ClothesImage
                        height={30}
                        alt={'upload'}
                        width={30}
                        src={
                            data.content[getRandomItem(2)].content[
                                getRandomItem(2)
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
                                <ClothesImage
                                    height={30}
                                    alt="upload"
                                    width={30}
                                    src={'assets/upload.png'}
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
