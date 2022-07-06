import firebase from 'firebase/compat/app';
import "firebase/database"
import 'firebase/compat/firestore';

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBpr56cv2Bw5a2_ja7Ojp2Ke75gFWxtL20",
    authDomain: "sales-prediction-5c7b1.firebaseapp.com",
    databaseURL: "https://sales-prediction-5c7b1-default-rtdb.firebaseio.com",
    projectId: "sales-prediction-5c7b1",
    storageBucket: "sales-prediction-5c7b1.appspot.com",
    messagingSenderId: "185015479674",
    appId: "1:185015479674:web:5e0aef2360862306c2bac3",
    measurementId: "G-WNP36CWJ3Q"
});
var db=firebase.firestore();
export{db};

