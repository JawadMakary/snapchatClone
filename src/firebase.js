import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCSEwG8OiSdkXRGSBFR2XRFy7AB1an3D7E",
    authDomain: "snapshatclone-ed49c.firebaseapp.com",
    projectId: "snapshatclone-ed49c",
    storageBucket: "snapshatclone-ed49c.appspot.com",
    messagingSenderId: "350989287566",
    appId: "1:350989287566:web:3a3dd6dc014a28ec0289df",
    measurementId: "G-DEJQJLMM64"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore()
  const auth= firebase.auth()
  const storage=firebase.storage()
  const provider= new firebase.auth.GoogleAuthProvider()
  
  export {db,auth,storage,provider}