  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword }  from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
  import { getFirestore ,doc, getDoc,collection } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCh2lCF7-gIgmzQIRc7fubfCpX7aBy8_i4",
    authDomain: "practiceproject-760b8.firebaseapp.com",
    projectId: "practiceproject-760b8",
    storageBucket: "practiceproject-760b8.appspot.com",
    messagingSenderId: "22131487151",
    appId: "1:22131487151:web:4aadd84066301f7c343f5a",
    measurementId: "G-GVWDRWW019"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth()
  const db = getFirestore()
//   --------------------------------------------------------------------------------------------------------------------------------------------

  let email = document.getElementById("email")
  let password = document.getElementById("password")


window.loginHandler = () =>{
    let inpvals ={
        email : email.value ,
        password : password.value 
    }
console.log(inpvals)

signInWithEmailAndPassword(auth, inpvals.email, inpvals.password)
.then(async(res)=>{
    console.log(res)
    inpvals.id = res.user.uid
    const docRef = doc(db, "user",inpvals.id);
    const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
})
.catch((err)=>{
    console.log(err)
})
};