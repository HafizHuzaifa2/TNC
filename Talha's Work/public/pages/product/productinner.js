// ==================== firebase Config ======================
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
import {
    getDatabase,
    ref,
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
// const dbRef = ref(db, "products");



// ==================== Admin Code ======================
var ProductsDetails = [];
var quantity = 0

// function renderArray() {

var dataFromLocalStorage = localStorage.getItem("viewMore");
var parsedData = JSON.parse(dataFromLocalStorage);
console.log(parsedData)


// ProductsDetails.forEach(function(e) {
// console.log(e);
// plus1.addEventListner("click", function() {
//     quantity++
// })
// minus1.addEventListner("click", function() {
//     quantity--
// })

// ItemName,
// Discription
//  ImgURL,
//  Price,
// : rating,
var product = document.getElementById("product")
product.innerHTML = `
<div class="col-md-8 p-0  m-0">
<img src="${parsedData.Image}" height="500px" class="card-img-top w-100 card_text " alt="... ">
</div>
<div class="col-md-4  py-3 px-4 m-0 d-flex flex-column justify-content-between">


<p class="card-text  fs-3">${parsedData.desc}
</p>
<div class="fs-5">Name: <span>${parsedData.name}</span></div>
<p class="txcolor  fs-3"><i class="fas fa-star"></i>${parsedData.Rating}</p>

<h5 class="card-title  fs-1">RS : ${parsedData.price}</h5>

<p class="text-end"><button onclick="addtocart('${parsedData.Image}','${parsedData.name}','${parsedData.price}','${parsedData.Id}')" class="btn btn-warning">Add to cart</button></p>
</div>`;

// });
// }

// function deleteOrder(id) {
//     console.log(id);
// }
// onValue(
//     dbRef,
//     function(snapshot) {
//         snapshot.forEach(function(childSnapshot) {
//             ProductsDetails.push(childSnapshot.val());
//             renderArray();
//             // ...
//         });
//     }, {
//         onlyOnce: false,
//     }
// );
window.addtocart = function(ImgURL, ItemName, Price, id) {
    // id.preventDefault()
    // localStorage.removeItem("viewMore");
    var ItemName = {
        name: ItemName,
        // desc: Discription,
        Image: ImgURL,
        price: Price,
        // Rating: rating,
        Id: id,
    };

    localStorage.setItem("Addtocart", JSON.stringify(ItemName));
    // location.assign("product/productinner.html");
};