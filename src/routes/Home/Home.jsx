import React from 'react';
import { useSelector } from 'react-redux';

import { CategoryItem, Button, Spinner } from '../../components';
import { CategoryWrapper, ButtonsWrapper, StyledLink } from './Home.style';
import { LABELS } from '../../constants/locale';

const Home = () => {
    const categoriesList = useSelector(state => state.config.clothesList);
    const isFetchingData = useSelector(state => state.config.fetchDbDataStarted);

    if (isFetchingData) {
        return <Spinner />;
    }

    return (
        <>
            <CategoryWrapper>
                {categoriesList.map((category, index) => (
                    <StyledLink key={index} to={`/categories/${category.name}`}>
                        <CategoryItem category={category} />
                    </StyledLink>
                ))}
            </CategoryWrapper>
            <ButtonsWrapper>
                <StyledLink to="/categories/view-all">
                    <Button label={LABELS.viewAll} />
                </StyledLink>
                <Button label={LABELS.addItem} />
            </ButtonsWrapper>
            <div id="firebaseui-auth-container" />
        </>
    );
};

export default Home;
