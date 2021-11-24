/**
 * For now we are using firebase 8.0 syntax
 * with version 9.3.  
 * 
 * 9.x fixes a few bugs and is needed by a module we use
 * /compat/X provides the same imports etc. as version 8.0
 */

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/functions'
import 'firebase/compat/firestore'

const app = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
//  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
})

const auth = firebase.auth()
const firestore = firebase.firestore()

auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)

if (process.env.FIREBASE_USE_EMULATOR === 'true') {
  firebase.functions().useEmulator('localhost', 5001)
  auth.useEmulator('http://localhost:9099')
}

export const requestPasswordUpdate = firebase.functions().httpsCallable('requestPasswordUpdate')
export const updatePassword = firebase.functions().httpsCallable('updatePassword')
export  { auth, firestore }
export default app