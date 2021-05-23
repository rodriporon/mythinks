import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS4VE9hDbh9UJw3gGd8n9q-T2to3QOO5U",
  authDomain: "thinks-f9301.firebaseapp.com",
  projectId: "thinks-f9301",
  storageBucket: "thinks-f9301.appspot.com",
  messagingSenderId: "660423314960",
  appId: "1:660423314960:web:67b8fa8c1ab4bacd954495",
  measurementId: "G-9GDBSEYQGL",
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL } = user

  return {
    avatar: photoURL,
    username: displayName,
    email: email,
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
    onChange(normalizedUser)
  })
}
export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(githubProvider)
}
