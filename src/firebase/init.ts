import { ApplicationConfig } from './types'
import * as firebase from "firebase/app"

// Add the Firebase services that you want to use
import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"

// Initialize Firebase
//Change firebase configuration based on environment mode
var config = new ApplicationConfig(process.env.NODE_ENV)

const firebaseApp = firebase.initializeApp(config)
firebaseApp.functions().useFunctionsEmulator('http://localhost:5001')
export default firebaseApp.firestore()