//Accessing Kids Data from localStorage
let data = JSON.parse(localStorage.getItem("kidsData"));

//Importing renderProducts function
import renderProducts from "./renderProducts.js";

// Importing sidebar-filter
import sidebar from "../components/sidebar-filter.js";

renderProducts(data);

//Sort functionality
document.getElementById("naz-sort-products").addEventListener("change", sortByPrice);
function sortByPrice() {
    let selected = document.getElementById("naz-sort-products-option").value;

    if(selected == "lowtohigh")
    {
        data.sort((a,b)=>{
            return a.price - b.price;
        });
        renderProducts(data);
    }

    if(selected == "hightolow")
    {
        data.sort((a,b)=>{
            return b.price - a.price;
        });
        renderProducts(data);
    }
}

// Sidebar Filter
let sidebar_container = document.getElementById("naz-sidebar");
sidebar_container.innerHTML = sidebar();

//Filter Products
let button = document
    .getElementById("filterButton")
    .addEventListener("click", filterProducts);
function filterProducts() {

    // Filtering Based On Gender
    let menFilter = document.getElementById("menFilter");
    let womenFilter = document.getElementById("womenFilter");
    let kidFilter = document.getElementById("kidsFilter");

    if(menFilter.checked == true)
        window.location.href = "./menStyles.html";
    
    if(womenFilter.checked == true)
        window.location.href = "./womenStyles.html";

    if(kidFilter.checked == true)
        window.location.href = "./kidsStyles.html";
    
    // Filtering based on Categories
    let shirtFilter = document.getElementById("shirtFilter");
    let tshirtFilter = document.getElementById("tshirtFilter");
    let jacketFilter = document.getElementById("jacketFilter");
    let trouserFilter = document.getElementById("trouserFilter");
    let shortsFilter = document.getElementById("shortsFilter");
    let topsFilter = document.getElementById("topsFilter");
    let kurtasFilter = document.getElementById("kurtasFilter");
    let sareeFilter = document.getElementById("sareeFilter");

    let mensData = JSON.parse(localStorage.getItem("mensData"));
    let womensData = JSON.parse(localStorage.getItem("womensData"));
    let kidsData = JSON.parse(localStorage.getItem("kidsData"));


    if(shirtFilter.checked == true)
    {
        let filterList = mensData.filter(function (elem) {
            return elem.category == "shirt";
        });
        renderProducts(filterList);
    }

    if(tshirtFilter.checked == true)
    {
        let filterList = mensData.filter(function (elem) {
            return elem.category == "tshirt";
        });
        renderProducts(filterList);
    }

    if(jacketFilter.checked == true)
    {
        let filterList = mensData.filter(function (elem) {
            return elem.category == "jacket";
        });
        renderProducts(filterList);
    }

    if(trouserFilter.checked == true)
    {
        let filterList = mensData.filter(function (elem) {
            return elem.category == "pants";
        });
        renderProducts(filterList);
    }

    if(shortsFilter.checked == true)
    {
        let filterList = mensData.filter(function (elem) {
            return elem.category == "shorts";
        });
        renderProducts(filterList);
    }

    if(topsFilter.checked == true)
    {
        let filterList = womensData.filter(function (elem) {
            return elem.category == "top";
        });
        renderProducts(filterList);
    }

    if(kurtasFilter.checked == true)
    {
        let filterList = womensData.filter(function (elem) {
            return elem.category == "kurta";
        });
        renderProducts(filterList);
    }

    if(sareeFilter.checked == true)
    {
        let filterList = womensData.filter(function (elem) {
            return elem.category == "saree";
        });
        renderProducts(filterList);
    }
}

// Importing Navbar
import navbar from "../components/navbar.js";
let nav_container = document.getElementById("naz-nav-container");
nav_container.innerHTML = navbar();

//Importing Footer
import footer from "../components/footer.js"
let footer_container = document.getElementById("naz-footer-container");
footer_container.innerHTML = footer();