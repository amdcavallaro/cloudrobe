import React, { useState, useEffect } from 'react';

import getFirebase from '../../services/Firebase/firebaseService';
import { Group } from '../../components';
import { LABELS } from '../../constants/locale';
import { Title } from './Home.style';

const Home = () => {
    const [dbData, setDbData] = useState(null);

    useEffect(() => {
        const results = getFirebase();
        results.on('value', snapshot => {
            snapshot.forEach(data => {
                setDbData(data.val());
            });
        });
    }, []);

    return (
        <>
            <Title>{LABELS.wardrobe}</Title>
            {dbData !== null &&
                dbData.map((key, index) => (
                    <Group data={key} key={`${key}${index}`} />
                ))}
            <div id="firebaseui-auth-container" />
        </>
    );
};

export default Home;
