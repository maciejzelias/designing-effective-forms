import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from
"https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHgGKw-5N3GPHiSS4Yv-nmhMzYsz0FJfc",
  authDomain: "tpf-test-87e83.firebaseapp.com",
  projectId: "tpf-test-87e83",
  storageBucket: "tpf-test-87e83.firebasestorage.app",
  messagingSenderId: "699819852071",
  appId: "1:699819852071:web:68d909fbd9690930466902"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();


const userSignIn = async () => {
  signInWithPopup(auth, provider).then((result) => {
    const user = result.user;
    console.log(user);
  }).catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
  })
}

const userSignOut = async () => {
  signOut(auth).then(() => {
  alert("You have been signed out!")
  }).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  })
 }


 onAuthStateChanged(auth, (user) => {
  if(user)
  {
    alert("You are authenticated with google");

    const email = user.email;
    const userDisplayName = user.displayName;
    const splited = userDisplayName.split(" ");
    const name = splited[0];
    const lastName = splited[1];
    document.getElementById('name').value = name;
    document.getElementById('surname').value = lastName;
    document.getElementById('email').value = email;
  }
 })

const signInButton = document.querySelector("#signInButton");
const signOutButton = document.querySelector("#signOutButton");

 signInButton.addEventListener("click",
  userSignIn);
  signOutButton.addEventListener("click",
  userSignOut);