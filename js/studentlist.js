  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
  import { getFirestore ,doc, setDoc,collection,getDocs,deleteDoc,deleteField,updateDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";


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


// --------------------------------------------------------------------------------------------------------------------------------------

// const stdname = document.querySelector("#name")
// const rollno = document.querySelector("#rollno")
// const table = document.querySelector("#table")


// const submit = () => {
//     let a = stdname.value
//     let b = rollno.value

//     table.innerHTML += 
//     `
//     <tbody>
//     <tr>
//     <td>${a}</td>
//     <td>${b}</td>    
//     </tr>
//     </tbody>
    
//     `; 
//     stdname.innerHTML = ""
//     rollno.innerHTML = ""
// }


// =============================================================================================================================================

const table = document.querySelector("#table");
window.getMyData = async () => {
  const querySnapshot = await getDocs(collection(db, "userData"));
  let arr = [];
  table.innerHTML = "";
  querySnapshot.forEach((doc) => {
    const obj = {
      id: doc.id,
      ...doc.data(),
    };
    arr.push(obj)
    console.log(doc.id, " => ", doc.data());
    table.innerHTML += `
    <h1>User Data</h1>
       <tbody>
          <tr>
          <td>${obj.fullName}</td>
          <td>${obj.fatherName}</td>
          <td>${obj.CNIC}</td>
          <td>${obj.email}</td>
          </tr>
       </tbody>
         <button id="${obj.id}" onclick="deletdata(this)">deleteData</button>
    `;
  });
};





window.deletdata = async (ele) => {
  console.log("delete");
  await deleteDoc(doc(db, "userData", ele.id));
};

