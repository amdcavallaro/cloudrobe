import React from 'react';
import { CategoryContent } from './Category.style';

const Category = ({ content }) => {
    return (
        <CategoryContent>
            {content.map((key, index) => (
                <Category data={key} key={index} />
            ))}
        </CategoryContent>
    );
};

export default Category;
