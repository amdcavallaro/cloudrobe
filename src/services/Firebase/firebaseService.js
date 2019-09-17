import config from './firebase.js';
const firebase = require('firebase/app');

export const getFirebase = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(config);
    }

    return firebase.database().ref();
}
