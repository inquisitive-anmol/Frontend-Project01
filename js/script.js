let latest_prod = document.querySelector(".latest-prod");
let top_rating = document.querySelector(".top-rating");
let best_sellers = document.querySelector(".best-sellers");


latest_prod.addEventListener("click", (e) => {
    top_rating.removeAttribute('id');
    best_sellers.removeAttribute('id');
    latest_prod.setAttribute("id", "anim-line");
} );
top_rating.addEventListener("click", (e) => {
    best_sellers.removeAttribute('id');
    latest_prod.removeAttribute('id');
    top_rating.setAttribute("id", "anim-line");
} );
best_sellers.addEventListener("click", (e) => {
    latest_prod.removeAttribute('id');
    top_rating.removeAttribute('id');
    best_sellers.setAttribute("id", "anim-line");
} );