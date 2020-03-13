import * as firebase from 'firebase/app'
import { ApplicationConfig } from './types'

// Add the Firebase services that you want ot use
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/storage'

// Initialize Firebase
// Change firebase configuration based on environment mode
// var config = new ApplicationConfig(process.env.NODE_ENV)
const config = new ApplicationConfig('production')
export const firebaseApp = firebase.initializeApp(config)
// if (process.env.NODE_ENV === 'development') firebaseApp.functions()

export default firebaseApp.firestore()
export {firebase}
