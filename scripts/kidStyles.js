//Accessing Kids Data from localStorage
let data = JSON.parse(localStorage.getItem("kidsData"));

//Importing renderProducts function
import renderProducts from "./renderProducts.js";

renderProducts(data);