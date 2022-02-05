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
const dbRef = ref(db, `products/bracelet`);
const dbref = ref(db, `products/necklace`);
const Dbref = ref(db, `products/ring`);
const DbRef = ref(db, `products/others`);
const sliderDetailRef = ref(db, `ProductSliders`);


// ==================== Admin Code ======================
var ProductsDetails = [];
var ProductsDetails2 = [];
var ProductsDetails3 = [];
var ProductsDetails4 = [];
var sliderDetail = [];


function renderBracelet() {
    var product = document.getElementById("product");
    product.innerHTML = "";
    ProductsDetails.forEach(function(e) {
        console.log(e);
        product.innerHTML += `
        <div class="col-6 col-md-3 col-lg-2 p-1">


        <div class="card p-0 m-0">
        <img src="${e.ImgURL}" height="120px " class="card-img-top w-100 card_text " alt="... ">
        <div class="card-body ">
            <p class="card-text fw-bold">${e.ItemName}</p>
            <p class="card-text ">${e.Discription}
            </p>
            <div class="row">
            <h5 class="card-title col-6">RS: ${e.Price} </h5>
            <p class="card-text txcolor col-6"><i class="fas fa-star"></i><span class="text-secondary">${e.rating}</span></p>
        </div>
<hr class="my-3">

            <div class="text-end">
                <a href="" onclick="view('${e.ImgURL}','${e.ItemName}','${e.Discription}','${e.Price}','${e.rating}','${e.id}')" class="btn  btn-primary">View More <i class="fal fa-arrow-to-right"></i></a>

            </div>


        </div>
        </div>`;
    });
}

onValue(
    dbRef,
    function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            ProductsDetails.push(childSnapshot.val());
            renderBracelet();
            // ...
        });
    }, {
        onlyOnce: false,
    }
);

function renderNeclace() {
    var product2 = document.getElementById("product2");
    product2.innerHTML = "";
    ProductsDetails2.forEach(function(e) {
        console.log(e);
        product2.innerHTML += `
        
        <div class="col-6 col-md-3 col-lg-2 p-0 m-0">


        <div class="card p-0 m-0">
            <img src="${e.ImgURL}" height="120px " class="card-img-top w-100 card_text " alt="... ">
            <div class="card-body ">
                <p class="card-text fw-bold">${e.ItemName}</p>
                <p class="card-text ">${e.Discription}
                </p>
                <div class="row">
                <h5 class="card-title col-6">RS: ${e.Price} </h5>
                <p class="card-text txcolor col-6"><i class="fas fa-star"></i><span class="text-secondary">${e.rating}</span></p>
            </div>
    <hr class="my-3">
              
                <div class="text-end">
                    <a  onclick="view('${e.ImgURL}','${e.ItemName}','${e.Discription}','${e.Price}','${e.rating}','${e.id}')" class="btn  btn-primary">View More <i class="fal fa-arrow-to-right"></i></a>

                </div>
                
            
            </div>
        </div>`;
    });
}

onValue(
    dbref,
    function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            ProductsDetails2.push(childSnapshot.val());
            renderNeclace();
            // ...
        });
    }, {
        onlyOnce: false,
    }
);

function renderRing() {
    var product3 = document.getElementById("product3");
    product3.innerHTML = "";
    ProductsDetails3.forEach(function(e) {
        console.log(e);
        product3.innerHTML += `
        <div class="col-6 col-md-3 col-lg-2 p-1">


        <div class="card p-0 m-0">
            <img src="${e.ImgURL}" height="120px " class="card-img-top w-100 card_text " alt="... ">
            <div class="card-body ">
                <p class="card-text fw-bold">${e.ItemName}</p>
                <p class="card-text ">${e.Discription}
                </p>
                <div class="row">
                <h5 class="card-title col-6">RS: ${e.Price} </h5>
                <p class="card-text txcolor col-6"><i class="fas fa-star"></i><span class="text-secondary">${e.rating}</span></p>
            </div>
            <div class="text-end">
            <a href="" onclick="view('${e.ImgURL}','${e.ItemName}','${e.Discription}','${e.Price}','${e.rating}','${e.id}')" class="btn  btn-primary">View More <i class="fal fa-arrow-to-right"></i></a>

        </div>
        
            </div>
        </div>`;
    });
}

onValue(
    Dbref,
    function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            ProductsDetails3.push(childSnapshot.val());
            renderRing();
            // ...
        });
    }, {
        onlyOnce: false,
    }
);

function renderOthers() {
    var product4 = document.getElementById("product4");
    product4.innerHTML = "";
    ProductsDetails4.forEach(function(e) {
        console.log(e);
        product4.innerHTML += `
        <div class="col-6 col-md-4 col-lg-2 p-1">


       <div class="card p-0 m-0">
            <img src="${e.ImgURL}" height="120px " class="card-img-top w-100 card_text " alt="... ">
            <div class="card-body ">
                <p class="card-text fw-bold">${e.ItemName}</p>
                <p class="card-text ">${e.Discription}
                </p>
                <div class="row">
                <h5 class="card-title col-6">RS: ${e.Price} </h5>
                <p class="card-text txcolor col-6"><i class="fas fa-star"></i><span class="text-secondary">${e.rating}</span></p>
            </div>
            <div class="text-end">
            <a href="" onclick="view('${e.ImgURL}','${e.ItemName}','${e.Discription}','${e.Price}','${e.rating}','${e.id}')" class="btn  btn-primary">View More <i class="fal fa-arrow-to-right"></i></a>

        </div>
        
            </div>
        </div>`;
    });
}

onValue(
    DbRef,
    function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            ProductsDetails4.push(childSnapshot.val());
            renderOthers();
            // ...
        });
    }, {
        onlyOnce: false,
    }
);

function renderd() {
    var slider = document.getElementById("slider");
    sliderDetail.forEach(function(e) {
        console.log(e);
        slider.innerHTML = `
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${e.slider1}" height="500px" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${e.slider2}" height="500px" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${e.slider3}" height="500px" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>`;
    });
}

onValue(
    sliderDetailRef,
    function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            sliderDetail.push(childSnapshot.val());
            renderd();
            // ...
        });
    }, {
        onlyOnce: false,
    }
);

// var view = document.getElementById("view")

window.view = function(ImgURL, ItemName, Discription, Price, rating, id) {
    // id.preventDefault()
    localStorage.removeItem("viewMore");
    var obj = {
        name: ItemName,
        desc: Discription,
        Image: ImgURL,
        price: Price,
        Rating: rating,
        Id: id,
    };

    localStorage.setItem("viewMore", JSON.stringify(obj));
    location.assign("product/productinner.html");
};