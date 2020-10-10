import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyANRfpJiHOYZ-Nz4NojDerM7odRyn_1l9Y",
    authDomain: "todo-53a87.firebaseapp.com",
    databaseURL: "https://todo-53a87.firebaseio.com",
    projectId: "todo-53a87",
    storageBucket: "todo-53a87.appspot.com",
    messagingSenderId: "396023480811",
    appId: "1:396023480811:web:4b43affd113f2acfbe19ae",
    measurementId: "G-19GZDXEV3X"
};


export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
