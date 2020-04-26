import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDiWha5-dhsrCrLSR3R0Aqctv9iyGp9eEg",
    authDomain: "dalicalendar-936c1.firebaseapp.com",
    databaseURL: "https://dalicalendar-936c1.firebaseio.com",
    projectId: "dalicalendar-936c1",
    storageBucket: "dalicalendar-936c1.appspot.com"
};
firebase.initializeApp(config);

const database = firebase.database();