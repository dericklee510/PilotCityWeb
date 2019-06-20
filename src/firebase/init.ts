import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions"
import store from '@/store'
import { REAL_DB_KEY, TEST_DB_KEY } from '@/keys'

// Initialize Firebase
if (!store.state.test) {
    var config = {
        apiKey: REAL_DB_KEY,
        authDomain: "pilotcity-firestore.firebaseapp.com",
        databaseURL: "https://pilotcity-firestore.firebaseio.com",
        projectId: "pilotcity-firestore",
        storageBucket: "pilotcity-firestore.appspot.com",
        messagingSenderId: "80767280856"
    };
}
else {
    console.log("Using Test Database")
    var config = {
        apiKey: TEST_DB_KEY,
        authDomain: "test-database-5c3f8.firebaseapp.com",
        databaseURL: "https://test-database-5c3f8.firebaseio.com",
        projectId: "test-database-5c3f8",
        storageBucket: "test-database-5c3f8.appspot.com",
        messagingSenderId: "206893838009"
    };
}

const firebaseApp = firebase.initializeApp(config)
firebaseApp.functions().useFunctionsEmulator('http://localhost:5001')
export default firebaseApp.firestore()