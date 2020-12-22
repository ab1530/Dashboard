import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCYrZMaz2bZIqXzQa1M6CA7cGYLDZ_XhtI",
    authDomain: "dashboard-264d0.firebaseapp.com",
    projectId: "dashboard-264d0",
    storageBucket: "dashboard-264d0.appspot.com",
    messagingSenderId: "783988357763",
    appId: "1:783988357763:web:d9f8e7e107f426c48539b6",
    measurementId: "G-H84G6GRZLQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//const fire = firebase.initializeApp(firebaseConfig);

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();;