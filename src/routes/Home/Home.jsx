import React, { useState, useEffect } from 'react';

import config from '../../services/Firebase/firebase.js';
import { Group } from '../../components';
import { LABELS } from '../../constants/locale';
import { Title } from './Home.style';

let firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

firebase.initializeApp(config);

const db = firebase.database().ref();

const Home = () => {
    const [dbData, setDbData] = useState(null);

    useEffect(() => {
        let results = db;
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
                dbData.map((key, index) => <Group data={key} key={index} />)}
            <div id="firebaseui-auth-container" />
        </>
    );
};

export default Home;
