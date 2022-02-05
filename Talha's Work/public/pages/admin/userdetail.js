// ==================== firebase Config ======================
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
import {
    getDatabase,
    ref,
    onValue,
    push,
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
const db = getDatabase();
const dbRef = ref(db, `users`);



// ==================== Admin Code ======================
var ProductsDetails = [];



var userdetails = document.getElementById(" userdetails");

function renderArray() {
    console.log(e);
    userdetails.innerHTML = "";
    ProductsDetails.forEach(function(e) {
        userdetails.innerHTML += `
        <div class="p-3">
        <div class="d-flex flex-wrap justify-content-between fs-4">
            <div class="py-2"><i class="fal fa-user"></i> <span id="fname">${e.FirstName}</span></div>
            <div class="py-2"><i class="fal fa-user"></i><span id="lname">${e.LastName}</span></div>
        </div>
        <div class="d-flex flex-wrap justify-content-between fs-4">
            <div class="py-2"><i class="fal fa-user"></i> <span id="uname">${e.UserName}</span></div>
            <div class="py-2"><i class="fal fa-envelope"></i> <span id="Email">${e.Email}</span></div>
        </div>

        <div class="d-flex flex-wrap justify-content-between fs-4">

            <div class="py-2"><i class="fas fa-map-marker-alt"></i> <span id="address">${e.Address}</span> </div>
            <div class="py-2"><i class="fab fa-pinterest"></i> <span id="uid">${e.uid}</span> </div>
        </div>
        <div class="d-flex flex-wrap justify-content-between fs-4">

            <div class="py-2"> <i class="fad fa-lock-alt"></i> <span id="password">${e.Password}</span> </div>
            <div class="py-2"><i class=" fal fa-bookmark "></i> <span id="contact">${e.Contact}</span></div>
        </div>
        <div class="d-flex flex-wrap justify-content-between fs-4 ">

            <div class="py-2 "><i class="fal fa-globe-asia "></i> <span id="zip">${e.Zip}</span></div>
            <div class="py-2 "><i class="fad fa-flag "></i> <span id="country">${e.Country}</span></div>
        </div>
    
    </div>`;
    });
}

// function deleteOrder(id) {
//     console.log(id);
// }
onValue(
    dbRef,
    function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            ProductsDetails.push(childSnapshot.val());
            renderArray();
            // ...
        });
    }, {
        onlyOnce: false,
    }
);