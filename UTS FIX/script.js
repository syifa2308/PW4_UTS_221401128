// Daftar produk
const products = [
    { id: 1, name: "T-shirt", price: 9.72, description: "Comfortable cotton T-shirt", image:"t-shirt.jpg" },
    { id: 2, name: "Jeans", price: 12.9, description: "Classic denim jeans for any occasion", image:"jeans.jpg" },
    { id: 3, name: "Sneakers", price: 81.04, description: "Stylish and comfortable sneakers", image:"sneaakers.jpg" },
    { id: 4, name: "Backpack", price: 12.97, description: "Durable and spacious backpack for daily use", image:"backpack.jpg" },
    { id: 5, name: "Watch", price: 25.93, description: "Elegant wristwatch for a timeless look", image:"watch.jpg" },
    // Tambahkan produk sesuai kebutuhan
];

// Fungsi untuk menampilkan produk ke dalam katalog
function displayCatalog() {
    const catalogContainer = document.getElementById("catalog");

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p> 
            <p>${product.description}</p>
        `;

        catalogContainer.appendChild(productElement);
    });
}


// Panggil fungsi untuk menampilkan katalog saat halaman dimuat
window.onload = displayCatalog;
