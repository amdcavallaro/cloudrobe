import config from './firebase.js';
const firebase = require('firebase/app');

const getFirebase = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(config);
    }

    return firebase.database().ref();
}

export default getFirebase;