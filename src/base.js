import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCYJAPMAG9GYfR7yyLbihMWx6kS6W9U46Q",
  authDomain: "catch-of-the-day-kim-man.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-kim-man-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//this is a  named export
export { firebaseApp };

//this is a default export
export default base;
