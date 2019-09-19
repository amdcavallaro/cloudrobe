import React from 'react';
import { useSelector } from 'react-redux';
import { CategoryContent } from './Category.style';

const Category = ({ match }) => {
    const category = match.params.id;
    const categoriesList = useSelector(state => state.config.clothesList);

    console.log('categoriesList', categoriesList);

    return (
        <div />
        // <CategoryContent>
        //     {category.map((key, index) => (
        //         <Category data={key} key={index} />
        //     ))}
        // </CategoryContent>
    );
};

export default Category;
