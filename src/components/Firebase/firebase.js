// import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Set the configuration for your app
// const prodConfig = {
//   apiKey: "AIzaSyA5iG_4eX2NsjEwa4W6zTnNxusROQwv0_g",
//   authDomain: "my-wardrobe-b2959.firebaseapp.com",
//   databaseURL: "https://my-wardrobe-b2959.firebaseio.com",
//   storageBucket: "eur3.appspot.com"
// };

const devConfig = {
  apiKey: "AIzaSyA5iG_4eX2NsjEwa4W6zTnNxusROQwv0_g",
  authDomain: "my-wardrobe-b2959.firebaseapp.com",
  databaseURL: "https://my-wardrobe-b2959.firebaseio.com",
  storageBucket: "eur3.appspot.com"
};

// class Firebase {
//   constructor() {
//     app.initializeApp(config);

//     this.auth = app.auth();
//     this.db = app.database();
//   }

  // *** Auth API ***
//   doCreateUserWithEmailAndPassword = (email, password) =>
//     this.auth.createUserWithEmailAndPassword(email, password);

//   doSignInWithEmailAndPassword = (email, password) =>
//     this.auth.signInWithEmailAndPassword(email, password);

//   doSignOut = () => this.auth.signOut();

//   doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

//   doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
// }

const config = devConfig;

export default config;

// TODO
// As alternative, you can also use environment variables in React applications, but you have to use the REACT_APP prefix when you use create-react-app to set up the application:
// Source: https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/
// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// };
