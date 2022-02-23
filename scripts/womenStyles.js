//Accessing Womens Data from localStorage
let data = JSON.parse(localStorage.getItem("womensData"));

// Importing sidebar-filter
import sidebar from "../components/sidebar-filter.js";

//Importing renderProducts function
import renderProducts from "./renderProducts.js";

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
    let kidFilter = document.getElementById("kidsFilter");
    if(menFilter.checked == true)
        window.location.href = "./menStyles.html";

    if(kidFilter.checked == true)
        window.location.href = "./kidsStyles.html"

    
}