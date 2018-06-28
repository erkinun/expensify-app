import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB_45D5Ilc9covQR1hCiaUfcDdVnG15qW8",
    authDomain: "expensify-abe50.firebaseapp.com",
    databaseURL: "https://expensify-abe50.firebaseio.com",
    projectId: "expensify-abe50",
    storageBucket: "expensify-abe50.appspot.com",
    messagingSenderId: "847200238027"
};
firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'Erkin Unlu'
})



console.log('name set')
