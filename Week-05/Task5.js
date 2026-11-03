const productForm = document.getElementById("productForm");
const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const filterCategory = document.getElementById("filterCategory");
const productCount = document.getElementById("productCount");
const noProduct = document.getElementById("noProduct");

let products = [
    {
        id: 1,
        name: "Laptop",
        price: 55000,
        category: "Electronics"
    },
    {
        id: 2,
        name: "Smartphone",
        price: 25000,
        category: "Electronics"
    },
    {
        id: 3,
        name: "T-Shirt",
        price: 799,
        category: "Clothing"
    },
    {
        id: 4,
        name: "Headphones",
        price: 2500,
        category: "Accessories"
    }
];

productForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("productName").value.trim();
    const price = Number(document.getElementById("productPrice").value);
    const category = document.getElementById("productCategory").value;

    if (name === "" || price <= 0) {
        alert("Please enter valid product details.");
        return;
    }

    const newProduct = {
        id: Date.now(),
        name: name,
        price: price,
        category: category
    };

    products.push(newProduct);

    productForm.reset();

    displayProducts();
});

function displayProducts() {

    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = filterCategory.value;

    const filteredProducts = products.filter(function(product) {

        const matchesSearch =
            product.name.toLowerCase().includes(searchText);

        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    productList.innerHTML = "";

    productCount.textContent = filteredProducts.length;

    if (filteredProducts.length === 0) {

        noProduct.style.display = "block";

        return;
    }

    noProduct.style.display = "none";

    filteredProducts.forEach(function(product) {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <h3>${product.name}</h3>

            <p>
                <strong>Price:</strong>
                ₹${product.price}
            </p>

            <p>
                <strong>Category:</strong>
                ${product.category}
            </p>

            <button
                class="delete-btn"
                onclick="deleteProduct(${product.id})">
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
}

searchInput.addEventListener("input", displayProducts);

filterCategory.addEventListener("change", displayProducts);

displayProducts();