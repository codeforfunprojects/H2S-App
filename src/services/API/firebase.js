import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const config = {
  apiKey:
    process.env.NODE_ENV ||
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "test"
      ? process.env.REACT_APP_FIREBASE_API_KEY
      : JSON.parse(process.env.REACT_APP_FIREBASE_API_KEY),
  authDomain: "h2s-student-management.firebaseapp.com",
  databaseURL: "https://h2s-student-management.firebaseio.com",
  projectId: "h2s-student-management",
  storageBucket: "h2s-student-management.appspot.com",
  messagingSenderId: "540291206026"
};

app.initializeApp(config);
const Auth = app.auth();

export default Auth;
