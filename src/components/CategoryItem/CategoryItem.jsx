import React, { useState } from 'react';
import {
    CategoryWrapper,
    CategoryImage,
    CategoryName,
    CategoryCount,
    CategoryDetails
} from './CategoryItem.style';

const CategoryItem = ({ category }) => {
    const [hideCategory, setHideCategory] = useState(false);

    return (
        <CategoryWrapper onClick={() => setHideCategory(!hideCategory)}>
            <CategoryImage main={category}>
                <CategoryDetails>
                    <CategoryName>{category}</CategoryName>
                    <CategoryCount>{`0 items`}</CategoryCount>
                </CategoryDetails>
            </CategoryImage>
        </CategoryWrapper>
    );
};

export default CategoryItem;
