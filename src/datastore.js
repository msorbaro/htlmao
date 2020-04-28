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
const ourAuth = firebase.auth();

export function signUp(email, password) {
    ourAuth.createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
            console.log('error creating user and password');
        });
}

export function signOut() {
    ourAuth.signOut();
}


export function signIn(email, password) {
    ourAuth.signInWithEmailAndPassword(email, password)
        .then(function() {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    consolde.log('Welcome!')
                    console.log(user.email);
                }
            });
        }
    )

}