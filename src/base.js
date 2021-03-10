import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBeDKP4jbhOJ_rn2TIEDvtsRyWL9IdJCyE",
  authDomain: "fir-register-test.firebaseapp.com",
  databaseURL: "https://fir-register-test-default-rtdb.firebaseio.com",
  projectId: "fir-register-test",
  storageBucket: "fir-register-test.appspot.com",
  messagingSenderId: "134122851824",
  appId: "1:134122851824:web:0a6fc2a3bd84fd790b2135"
});

export default app;
