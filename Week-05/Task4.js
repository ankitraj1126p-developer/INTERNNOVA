const form = document.getElementById("productForm");
const productList = document.getElementById("productList");
const message = document.getElementById("message");

let products = [];

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("productName").value;
    const price = document.getElementById("productPrice").value;
    const category = document.getElementById("productCategory").value;

    const product = {
        id: Date.now(),
        name: name,
        price: price,
        category: category
    };

    products.push(product);

    displayProducts();

    message.textContent = "Product added successfully!";
    message.style.color = "green";

    form.reset();
});

function displayProducts() {

    productList.innerHTML = "";

    products.forEach(function(product) {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p><strong>Price:</strong> ₹${product.price}</p>
            <p><strong>Category:</strong> ${product.category}</p>
            <button class="delete-btn" onclick="deleteProduct(${product.id})">
                Delete
            </button>
        `;

        productList.appendChild(card);
    });
}

function deleteProduct(id) {

    products = products.filter(function(product) {
        return product.id !== id;
    });

    displayProducts();

    message.textContent = "Product deleted successfully!";
    message.style.color = "red";
}