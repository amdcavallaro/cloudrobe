
// Set the configuration for your app
// const prodConfig = {
//   apiKey: "KEY123",
//   authDomain: "my-wardrobe-b2959.firebaseapp.com",
//   databaseURL: "https://my-wardrobe-b2959.firebaseio.com",
//   storageBucket: "eur3.appspot.com"
// };

const devConfig = {
  apiKey: "KEY123",
  authDomain: "my-wardrobe-b2959.firebaseapp.com",
  databaseURL: "https://my-wardrobe-b2959.firebaseio.com",
  storageBucket: "eur3.appspot.com"
};

// TODO - Make sure the only firebase instane comes from here
// class Firebase {
//   constructor() {
//     app.initializeApp(config);

//     this.auth = app.auth();
//     this.db = app.database();
//   }
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
