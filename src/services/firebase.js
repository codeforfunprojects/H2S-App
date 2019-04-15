import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "h2s-student-management.firebaseapp.com",
  databaseURL: "https://h2s-student-management.firebaseio.com",
  projectId: "h2s-student-management",
  storageBucket: "h2s-student-management.appspot.com",
  messagingSenderId: "540291206026"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  async login(email, password) {
    return await this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name
    });
  }
}

export default new Firebase();
