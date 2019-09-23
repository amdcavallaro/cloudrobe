import React from 'react';
import { useSelector } from 'react-redux';
import { CategoryContent } from './Category.style';
import { ClothesImage, Spinner } from '../../components';
import { getClothesListByCategory } from '../../utils/ItemsUtil';

const Category = ({ match }) => {
    const category = match.params.id;
    const categoriesList = useSelector(state => state.config.clothesList);
    const isFetchingData = useSelector(
        state => state.config.fetchDbDataStarted
    );

    if (isFetchingData) {
        return <Spinner />;
    }

    return (
        <CategoryContent>
            {getClothesListByCategory(categoriesList, category).map(
                (clothes, index) => (
                    <ClothesImage
                        key={index}
                        alt={clothes.name}
                        src={clothes.url}
                    />
                )
            )}
        </CategoryContent>
    );
};

export default Category;
