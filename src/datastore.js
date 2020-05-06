import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDiWha5-dhsrCrLSR3R0Aqctv9iyGp9eEg",
    authDomain: "dalicalendar-936c1.firebaseapp.com",
    databaseURL: "https://dalicalendar-936c1.firebaseio.com",
    projectId: "dalicalendar-936c1",
    storageBucket: "dalicalendar-936c1.appspot.com",
    messagingSenderId: "1079563351374",
    appId: "1:1079563351374:web:91ee4792f8b64acd6c9a1f",
    measurementId: "G-XMW2X1NTYV"
  };

firebase.initializeApp(config);

const ourDB = firebase.database();
const ourAuth = firebase.auth();

export function signUp(email, password) {
    ourAuth.createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
            console.log('error creating user and password');
        });
}

export function signOut() {
    ourAuth.signOut().catch(function(error) {
        console.log('error creating user and password');
    });
}


export function signIn(email, password) {
    ourAuth.signInWithEmailAndPassword(email, password)
        .then(function() {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    console.log('Welcome!')
                    console.log(user.email);
                }
            });
        }
    )

}

export function addNewPost(StudentGroup, EventTitle, Time, Place, AdditionalDescription, Category, Food, Date) {
    ourDB.ref('NewPost/').push({
        StudentGroup, EventTitle, Time, Place, AdditionalDescription, Category, Food, Date
    });
}

export function removeNewPost(eventID) {
    ourDB.ref('NewPost/' + eventID).remove();
}

export function fetchNewPost(callback) {
    ourDB.ref('NewPost/').on('value', (snapshot) => {
        const allEvents = snapshot.val();
        callback(allEvents);
    });
}