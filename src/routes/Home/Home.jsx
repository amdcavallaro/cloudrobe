import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bootstrapAction } from '../../actions/bootstrapActions';

import { CategoryItem, Button } from '../../components';
import { CATEGORIES } from '../../constants/settings';
import { LABELS } from '../../constants/locale';
import { CategoryWrapper } from './Home.style';

const Home = () => {
    const dispatch = useDispatch();
    // const clothesList = useSelector(state => state.config.clothesList);

    useEffect(() => {
        dispatch(bootstrapAction());
    }, []);

    return (
        <>
            <CategoryWrapper>
                {CATEGORIES.map((key, index) => (
                    <CategoryItem category={key} key={index} />
                ))}
            </CategoryWrapper>
            <Button label={LABELS.viewAll} />
            <Button label={LABELS.loadItem} />
            <div id="firebaseui-auth-container" />
        </>
    );
};

export default Home;
