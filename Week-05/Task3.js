let products = [
    {
        name: "Laptop",
        price: 55000,
        category: "Electronics"
    },
    {
        name: "Smartphone",
        price: 25000,
        category: "Electronics"
    },
    {
        name: "Headphones",
        price: 2500,
        category: "Accessories"
    }
];

function addProduct() {

    const name = document.getElementById("productName").value;
    const price = Number(document.getElementById("productPrice").value);
    const category = document.getElementById("productCategory").value;

    if (name === "" || price <= 0 || category === "") {
        alert("Please enter valid product details.");
        return;
    }

    const newProduct = {
        name: name,
        price: price,
        category: category
    };

    products.push(newProduct);

    displayProducts();

    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productCategory").value = "";
}

function displayProducts() {

    const productList = document.getElementById("productList");

    productList.innerHTML = "";

    products.forEach(function(product) {

        const productDiv = document.createElement("div");

        productDiv.className = "product";

        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <p>Category: ${product.category}</p>
        `;

        productList.appendChild(productDiv);
    });
}

displayProducts();