// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBx9sbG6JArDE4bXT5fZXczrSCleKtNoq4",
  authDomain: "authentication-app-1713f.firebaseapp.com",
  databaseURL: "https://authentication-app-1713f-default-rtdb.firebaseio.com",
  projectId: "authentication-app-1713f",
  storageBucket: "authentication-app-1713f.appspot.com",
  messagingSenderId: "878348256011",
  appId: "1:878348256011:web:4dca140236c6f7f87e180e"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password)
  // firebase code
  firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
          // Signed in 
          // document.write("You are Signed Up")
          window.location.replace('/reg_signin.html')
          console.log(result)
          // ...
      })
      .catch((error) => {
          console.log(error.code);
          console.log(error.message)
          // ..
      });
}

// Sign In function
const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // firebase code
  firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
          // Signed in 
          window.location.replace('/Main.html')
        //   document.write("You are Signed In")
          console.log(result)
      })
      .catch((error) => {
          console.log(error.code);
          console.log(error.message)
      });
}
