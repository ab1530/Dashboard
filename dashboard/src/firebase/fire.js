import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "",
  authDomain: ".firebaseapp.com",
  projectId: "",
  storageBucket: ".appspot.com",
  messagingSenderId: "",
  appId: ""
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
