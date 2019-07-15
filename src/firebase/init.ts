import { ApplicationConfig } from './types'
import * as firebase from "firebase/app"

// Add the Firesebase services that you want to u
import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"

// Initialize Firebase
//Change firebase configuration based on environment mode
var config = new ApplicationConfig(process.env.NODE_ENV)

export const firebaseApp = firebase.initializeApp(config)
firebaseApp.functions().useFunctionsEmulator('http://localhost:5001')
export default firebaseApp.firestore()