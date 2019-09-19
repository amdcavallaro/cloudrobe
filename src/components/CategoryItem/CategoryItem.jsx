import React, { useState } from 'react';
import {
    CategoryWrapper,
    CategoryImage,
    CategoryName,
    CategoryCount,
    CategoryDetails
} from './CategoryItem.style';

import { getStringPluralize } from '../../utils/ItemsUtil';

const CategoryItem = ({ category }) => {
    const [hideCategory, setHideCategory] = useState(false);
    const { name, content } = category;

    return (
        <CategoryWrapper onClick={() => setHideCategory(!hideCategory)}>
            <CategoryImage main={name}>
                <CategoryDetails>
                    <CategoryName>{name}</CategoryName>
                    <CategoryCount>{`${content.length} ${getStringPluralize(
                        'item',
                        content.length
                    )}`}</CategoryCount>
                </CategoryDetails>
            </CategoryImage>
        </CategoryWrapper>
    );
};

export default CategoryItem;
