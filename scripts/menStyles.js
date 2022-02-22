//Accessing Mens Data from localStorage
let data = JSON.parse(localStorage.getItem("mensData"));

//Importing renderProducts function
import renderProducts from "./renderProducts.js";

renderProducts(data);