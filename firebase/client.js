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

const db = firebase.firestore()

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user

  return {
    avatar: photoURL,
    username: displayName,
    email: email,
    uid,
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

export const addThink = ({ avatar, content, userId, userName }) => {
  return db.collection("thinks").add({
    avatar,
    content,
    userId,
    userName,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  })
}

export const fetchLatestThinks = () => {
  return db
    .collection("thinks")
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data()
        const id = doc.id
        const { createdAt } = data

        const date = new Date(createdAt.seconds * 1000)

        const normalizedCreateAt = new Intl.DateTimeFormat("es-ES").format(date)

        return {
          ...data,
          id,
          createdAt: normalizedCreateAt,
        }
      })
    })
}
