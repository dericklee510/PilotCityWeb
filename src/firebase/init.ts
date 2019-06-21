import { Application_config } from './types'
import * as firebase from "firebase/app"

// Add the Firebase services that you want to use
import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"
import store from '@/store'
import { REAL_DB_KEY, TEST_DB_KEY } from '@/keys'

// Initialize Firebase

var config = new Application_config(process.env.NODE_ENV)

const firebaseApp = firebase.initializeApp(config)
firebaseApp.functions().useFunctionsEmulator('http://localhost:5001')
export default firebaseApp.firestore()