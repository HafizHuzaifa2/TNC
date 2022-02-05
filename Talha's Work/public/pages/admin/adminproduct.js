import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
import {
    getDatabase,
    ref,
    push,
    set,

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




var mainSlider = document.getElementById("mainSlider");

mainSlider.addEventListener("click", function() {
    var mainslider = {};

    mainslider.slider1main = document.getElementById("slider1main").value;
    mainslider.slider2main = document.getElementById("slider2main").value;
    mainslider.slider1Text = document.getElementById("slider1Text").value;
    mainslider.slider2Text = document.getElementById("slider2Text").value;



    const sliderRef = ref(db, `mainSlider`);
    const newPostRef = push(sliderRef);
    mainslider.id = newPostRef.key;
    set(newPostRef, mainslider)
        .then(function() {
            console.log("success");
        })
        .catch(function(err) {
            console.log(err);
        });

    console.log(mainslider);
});

var AddItems = document.getElementById("AddItem");

AddItems.addEventListener("click", function() {
    var product = {};

    product.Discription = document.getElementById("Discription").value;
    product.ProductCategory = document.getElementById("ProductCategory").value;
    product.ImgURL = document.getElementById("ImgURL").value;
    product.Price = document.getElementById("Price").value;
    product.ItemName = document.getElementById("ItemName").value;
    product.rating = document.getElementById("rating").value;


    const productRef = ref(db, `products/${product.ProductCategory}`);
    const newPostRef = push(productRef);
    product.id = newPostRef.key;
    set(newPostRef, product)
        .then(function() {
            console.log("success");
        })
        .catch(function(err) {
            console.log(err);
        });

    console.log(product);
});
var ProductSlider = document.getElementById("ProductSlider");

ProductSlider.addEventListener("click", function() {
    var slider = {};

    slider.slider1 = document.getElementById("slider1").value;
    slider.slider2 = document.getElementById("slider2").value;
    slider.slider3 = document.getElementById("slider3").value;



    const sliderRef = ref(db, `ProductSliders`);
    const newPostRef = push(sliderRef);
    slider.id = newPostRef.key;
    set(newPostRef, slider)
        .then(function() {
            console.log("success");
        })
        .catch(function(err) {
            console.log(err);
        });

    console.log(slider);
});

var additemfav = document.getElementById("additemfav");

additemfav.addEventListener("click", function() {
    var favProduct = {};

    favProduct.text = document.getElementById("text").value;
    favProduct.name = document.getElementById("name").value;
    favProduct.ImgURLfav = document.getElementById("ImgURLfav").value;


    const favRef = ref(db, `favorateProducts`);
    const newPostRef = push(favRef);
    favProduct.id = newPostRef.key;
    set(newPostRef, favProduct)
        .then(function() {
            console.log("success");
        })
        .catch(function(err) {
            console.log(err);
        });

    console.log(favProduct);
});









admin.addEventListener("click", function() {
    location.href = "admin.html"
})
userdetails.addEventListener("click", function() {
    location.href = "userdetail.html"
})
recylebin.addEventListener("click", function() {
    location.href = "recylebin.html"
})






















// ==================== Bookign Code ======================

// var dataFromLocalStorage = localStorage.getItem("viewMore");
// var parsedData = JSON.parse(dataFromLocalStorage);

// document.getElementById("hotelName").innerHTML = parsedData.name;
// document.getElementById("hotelDesc").innerHTML = parsedData.desc;
// document.getElementById("category").innerHTML = parsedData.category;