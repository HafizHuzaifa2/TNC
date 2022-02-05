// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
import {
    getDatabase,
    ref,
    set,
    get,
    push,
    child,
    onValue,
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
const dbRef = ref(db, "orders");

// =============== My Work =================

var ordersData = [];

function renderArray() {
    var orders = document.getElementById("orders");
    orders.innerHTML = "";
    ordersData.forEach(function(e) {
        ordersList.innerHTML += `
        <div class="p-2 px-4 fs-3 d-flex justify-content-between">
        <div><i class="fal fa-file-edit"></i></div>
        <div><i class="far fa-times"></i></div>
    </div>
    <div class="p-3">
        <div class="d-flex flex-wrap justify-content-between fs-4">
            <div class="py-2"><i class="fal fa-user"></i>${e.userName}</div>
            <div class="py-2"><i class="fal fa-envelope"></i>${e.emails}</div>
        </div>
        <div class="d-flex flex-wrap justify-content-between fs-4">

            <div class="py-2"><i class="fas fa-map-marker-alt"></i>${e.address}</div>
            <div class="py-2"><i class="fab fa-pinterest"></i>${e.productUID}</div>
        </div>
        <div class="d-flex flex-wrap justify-content-between fs-4">

            <div class="py-2"><i class="fal fa-bookmark"></i>${e.total}</div>
            <div class="py-2"><i class="fas fa-dollar-sign"></i>${e.method}</div>
        </div>
        <div class="d-flex flex-wrap justify-content-between fs-4">

            <div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                    <label class="form-check-label" for="flexSwitchCheckChecked">Order</label>
                </div>
            </div>
            <div>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                    <label class="form-check-label" for="flexSwitchCheckChecked">Checked</label>
                </div>
            </div>
        </div>

    </div>`;
    });
}

window.deleteOrder = function(id) {
    console.log(id);
}
onValue(
    dbRef,
    function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            ordersData.push(childSnapshot.val());
            renderArray();
            // ...
        });
    }, {
        onlyOnce: false,
    }
);


var adminproducts = document.getElementById("adminproducts")

adminproducts.addEventListener("click", function() {
    location.href = "adminproduct.html"
})
userdetails.addEventListener("click", function() {
    location.href = "userdetail.html"
})