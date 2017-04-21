var config = {
  apiKey: "AIzaSyAF7rHwFVCHhPElnGCKz8FCYyB6cN7Ds6M",
  authDomain: "frontend-f4d6e.firebaseapp.com",
  databaseURL: "https://frontend-f4d6e.firebaseio.com",
  projectId: "frontend-f4d6e",
  storageBucket: "frontend-f4d6e.appspot.com",
  messagingSenderId: "693472939637"
}

firebase.initializeApp(config)

export default firebase.database()