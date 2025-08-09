document.addEventListener("DOMContentLoaded", () => {
    let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
    const cartDisplay = document.querySelector(".navcart");

    // Update cart display
    function updateCart() {
        cartDisplay.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cartCount})`;
    }
    updateCart();

    // Add to cart
    document.querySelectorAll(".add-cart").forEach(btn => {
        btn.addEventListener("click", () => {
            cartCount++;
            localStorage.setItem("cartCount", cartCount);
            updateCart();
        });
    });

    // Search filter
    const searchInput = document.querySelector(".search");
    searchInput.addEventListener("input", () => {
        const value = searchInput.value.toLowerCase();
        document.querySelectorAll(".box").forEach(box => {
            const title = box.querySelector("h2").textContent.toLowerCase();
            box.style.display = title.includes(value) ? "block" : "none";
        });
    });

    // Category filter
    const categorySelect = document.querySelector(".all");
    categorySelect.addEventListener("change", () => {
        const category = categorySelect.value.toLowerCase();
        document.querySelectorAll(".box").forEach(box => {
            const boxCat = box.dataset.category;
            box.style.display = (category === "all" || boxCat === category) ? "block" : "none";
        });
    });
});
