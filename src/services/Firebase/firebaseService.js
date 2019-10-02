// This import loads the firebase namespace.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';

import config from './firebase.js';

// Initialize firebase
firebase.initializeApp(config);

// Export root reference.
export const firebaseReference = firebase.database().ref();