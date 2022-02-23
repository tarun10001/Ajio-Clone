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