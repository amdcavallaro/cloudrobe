import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bootstrapAction } from '../../actions/bootstrapActions';

import { Group, Spinner } from '../../components';
import { LABELS } from '../../constants/locale';
import { Title } from './Home.style';

const Home = () => {
    const dispatch = useDispatch();
    const clothesList = useSelector(state => state.config.clothesList);

    useEffect(() => {
        dispatch(bootstrapAction());
    }, []);

    return (
        <>
            <Title>{LABELS.wardrobe}</Title>
            {clothesList.length > 0 ? (
                clothesList.map((key, index) => (
                    <Group data={key} key={index} />
                ))
            ) : (
                <Spinner />
            )}
            <div id="firebaseui-auth-container" />
        </>
    );
};

export default Home;
