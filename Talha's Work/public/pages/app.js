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
const faref = ref(db, `favorateProducts`);
const slideref = ref(db, `mainSlider`);

var ProductsDetails = [];
var ProductsDetails2 = [];
var ProductsDetails3 = [];
var favorateProducts = [];
var mainslider = [];

function renderBracelet() {
    var product = document.getElementById("product");
    product.innerHTML = "";
    ProductsDetails.forEach(function(e) {
        console.log(e);
        product.innerHTML = `
        <div class="carousel-item ${e.active}" style="width: 18rem;" data-bs-interval="2000">
        <div class="card" id="caractive1">
            <img src="${e.ImgURL}" height="200px" alt="...">
            <div class="card-body">

                <p class="card-text fw-bold">${e.ItemName}</p>
                <p class="card-text">${e.Discription}
                </p>
                <div class="row">
                    <h5 class="card-title col-6">RS: ${e.Price} </h5>
                    <p class="card-text txcolor col-6"><i class="fas fa-star"></i><span class="text-secondary">${e.rating}</span></p>
                </div>
                <div class="row">
                    <div class="col-12">
                        <button href="" onclick="view('${e.ImgURL}','${e.ItemName}','${e.Discription}','${e.Price}','${e.rating}','${e.id}')" class="btn  btn-primary">View More<i class="fas fa-arrow-to-right px-1"></i></button>

                    </div>
                   
                </div>
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
        product2.innerHTML = `
        <div class="carousel-item ${e.active}" style="width: 18rem;" data-bs-interval="2000">
        <div class="card" id="caractive1">
            <img src="${e.ImgURL}" height="200px" alt="...">
            <div class="card-body">

                <p class="card-text fw-bold">${e.ItemName}</p>
                <p class="card-text">${e.Discription}
                </p>
                <div class="row">
                    <h5 class="card-title col-6">RS: ${e.Price} </h5>
                    <p class="card-text txcolor col-6"><i class="fas fa-star"></i><span class="text-secondary">${e.rating}</span></p>
                </div>
                <div class="row">
                    <div class="col-12">
                        <button href="" onclick="view('${e.ImgURL}','${e.ItemName}','${e.Discription}','${e.Price}','${e.rating}','${e.id}')" class="btn  btn-primary">View More<i class="fas fa-arrow-to-right px-1"></i></button>

                    </div>
                   
                </div>
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
        <div class="carousel-item ${e.active}" style="width: 18rem;" data-bs-interval="2000">
        <div class="card" id="caractive1">
            <img src="${e.ImgURL}" height="200px" alt="...">
            <div class="card-body">

                <p class="card-text fw-bold">${e.ItemName}</p>
                <p class="card-text">${e.Discription}
                </p>
                <div class="row">
                    <h5 class="card-title col-6">RS: ${e.Price} </h5>
                    <p class="card-text txcolor col-6"><i class="fas fa-star"></i><span class="text-secondary">${e.rating}</span></p>
                </div>
                <div class="row">
                    <div class="col-12">
                        <button href="" onclick="view('${e.ImgURL}','${e.ItemName}','${e.Discription}','${e.Price}','${e.rating}','${e.id}')" class="btn btn-primary">View More<i class="fas fa-arrow-to-right px-1"></i></button>

                    </div>
                   
                </div>
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

function renderfav() {
    var consumers = document.getElementById("consumers");
    consumers.innerHTML = "";
    favorateProducts.forEach(function(e) {
        console.log(e);

        consumers.innerHTML += `
        <div class="col-md-4 col-6 p-2">
                    <h5>${e.name}</h5>
                    <p>${e.text}</p>
                    <img src="${e.ImgURLfav}" alt="">

                </div>`;

    });
}

onValue(
    faref,
    function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            favorateProducts.push(childSnapshot.val());
            renderfav();
            // ...
        });
    }, {
        onlyOnce: false,
    }
);

function renderfava() {
    var slidebar = document.getElementById("slidebar");
    mainslider.forEach(function(e) {
        console.log(e);

        slidebar.innerHTML = `
        <div class="carousel-item active" data-bs-interval="3000">
        <img src="${e.slider1main}" height="500px" class="d-block  w-100" alt="...">
        <div class="carousel-caption d-none d-md-block flex-wrap text-center text-dark justify-content-cente align-items-center">
            <h1 class="fw-bold text-white">${e.slider1Text}</h1>

        </div>
    </div>
    <div class="carousel-item " data-bs-interval="3000">
        <img src="${e.slider2main}" height="500px" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block flex-wrap  text-center text-dark justify-content-cente align-items-start">
            <h1 class="fw-bold text-white">${e.slider2Text}</h1>

        </div>
    </div>`;

    });
}

onValue(
    slideref,
    function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            mainslider.push(childSnapshot.val());
            renderfava();
            // ...
        });
    }, {
        onlyOnce: false,
    }
);

window.view = function(ImgURL, ItemName, Discription, Price, rating, id) {
    // id.preventDefault()
    localStorage.removeItem("viewMore");
    console.log(id)
    var obj = {
        name: ItemName,
        desc: Discription,
        Image: ImgURL,
        price: Price,
        Rating: rating,
        Id: id,
    };

    localStorage.setItem("viewMore", JSON.stringify(obj));
    location.assign("pages/product/productinner.html");
};