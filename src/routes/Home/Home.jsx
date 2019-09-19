import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bootstrapAction } from '../../actions/bootstrapActions';

import { CategoryItem, Button, Spinner } from '../../components';
import { LABELS } from '../../constants/locale';
import { CategoryWrapper, StyledLink } from './Home.style';

const Home = () => {
    const dispatch = useDispatch();
    const categoriesList = useSelector(state => state.config.clothesList);
    const isFetchingData = useSelector(
        state => state.config.fetchDbDataStarted
    );

    useEffect(() => {
        dispatch(bootstrapAction());
    }, []);

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
            <StyledLink to="/categories/view-all">
                <Button label={LABELS.viewAll} />
            </StyledLink>
            <Button label={LABELS.addItem} />
            <div id="firebaseui-auth-container" />
        </>
    );
};

export default Home;
