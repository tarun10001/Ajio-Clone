// Rendering Products to DOM
function renderProducts(data) {
    data.map((elem) => {
        let product = document.createElement("div");
        product.setAttribute("class", "product");

        let poster = document.createElement("img");
        poster.setAttribute("class", "product-img");
        poster.setAttribute("src", elem.imageURL);

        let brand = document.createElement("p");
        brand.setAttribute("class", "product-brand");
        brand.innerHTML = elem.brand;

        let title = document.createElement("p");
        title.setAttribute("class", "product-title");
        title.innerHTML = elem.product;

        product.append(poster, brand, title);

        let parent = document.getElementById("naz-product-container");
        parent.append(product);
    });
}

export default renderProducts;