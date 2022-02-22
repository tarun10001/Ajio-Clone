//Accessing Womens Data from localStorage
let data = JSON.parse(localStorage.getItem("womensData"));

//Importing renderProducts function
import renderProducts from "./renderProducts.js";

renderProducts(data);