 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";
 import {
     getDatabase,
     ref,
     set,
     get,
     child,
 } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
     apiKey: "AIzaSyC5-ihpSfN7Zguuhm_95h-PkPxUZaHS3YI",
     authDomain: "formtest-20919.firebaseapp.com",
     projectId: "formtest-20919",
     storageBucket: "formtest-20919.appspot.com",
     messagingSenderId: "383188285836",
     appId: "1:383188285836:web:dfae974959829ba7a2bea9",
     measurementId: "G-39EV0N9VZP"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth();
 const db = getDatabase();

 // =============== My Work =================

 var a = document.getElementById("firstName");
 var b = document.getElementById("lastName");
 var c = document.getElementById("username");
 var d = document.getElementById("email");
 var e = document.getElementById("password");
 var f = document.getElementById("confirm-password");
 var g = document.getElementById("address");
 var h = document.getElementById("address2");
 var i = document.getElementById("country");
 var j = document.getElementById("city");
 var k = document.getElementById("zip");
 var con = document.getElementById("contacts")
 var m;
 var first = document.getElementById("first")
 var last = document.getElementById("last")
 var user = document.getElementById("user")
 var emails = document.getElementById("emails")
 var context = document.getElementById("context")
 var aler = document.getElementById("alertform")


 var obj;


 function checkValue(event) {

     event.preventDefault();
     if (a.value == "" || a.value == " " || a.value.length < 3) {
         first.innerHTML = "**Valid first name is required between 3 to 20 characters.";
         return;
     } else {
         first.innerHTML = ""
     }
     if (b.value == "" || b.value == " " || b.value.length < 3) {
         last.innerHTML = "**Valid last name is required between 3 to 20 characters.";

         return;
     } else {
         last.innerHTML = ""
     }
     if (c.value == "" || c.value == " " || c.value.length < 4) {
         user.innerHTML = "**Valid user name is required between 4 to 20 characters.";

         return;
     } else {
         user.innerHTML = ""
     }
     if (d.value == "" || d.value == " " || d.value.length == "@") {
         emails.innerHTML = "**Valid email is required @";

         return;
     } else {
         emails.innerHTML = ""
     }
     if (e.value == "" || e.value == " " || e.value.length < 6) {
         pass.innerHTML = "**Password should be at least 6 letters or character";

         return;
     } else {
         pass.innerHTML = ""
     }
     if (e.value != f.value) {
         confirmpass.innerHTML = "**Password is incorrect";

         return;
     } else {
         confirmpass.innerHTML = ""
     }
     if (g.value == "" || g.value == " ") {
         addres.innerHTML = "**Valid Address is required";

         return;
     } else {
         addres.innerHTML = ""
     }
     if (k.value == "" || k.value == " ") {
         zips.innerHTML = "**Valid Zip code is required";

         return;
     } else {
         zips.innerHTML = ""
     }
     if (con.value == "" || con.value == " ") {
         context.innerHTML == "**Enter a valid Number"
         return;
     } else {
         context.innerHTML = ""
     }

     obj = {
         FirstName: a.value,
         LastName: b.value,
         UserName: c.value,
         Email: d.value,
         Password: e.value,
         ConfirmPassword: f.value,
         Address: g.value,
         Address2: h.value,
         Country: i.value,
         City: j.value,
         Zip: k.value,
         Contact: con.value,
     };
     console.log(obj)
     createUserWithEmailAndPassword(auth, obj.Email, obj.Password)
         .then(function(userCredential) {
             // Signed in 
             const user = userCredential.user;
             obj.uid = userCredential.user.uid;
             errorShow.innerHTML = `<div class="alert alert-warning d-flex align-items-center" role="alert">
             <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
             <div>"**User Created Successfully"</div>
             </div>`
                 // ...
                 // ============= database work ===================

             const refrence = ref(db, "users/" + obj.uid);
             set(refrence, obj);

             location.replace("../login/SignIn.html")



         })
         .catch(function(error) {

             const errorCode = error.code;
             const errorMessage = error.message;
             errorShow.innerHTML = `<div class="alert alert-warning d-flex align-items-center" role="alert">
             <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
             <div>${error.message}</div>
         </div>`
                 // ..


         })



 }



 formsubmit.addEventListener("submit", function() {
     checkValue(event)

 });