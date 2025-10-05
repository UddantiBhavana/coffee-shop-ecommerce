let cart = [];

function addToCart(product) {
  cart.push(product);
  console.log(`${product} added to cart. Total items: ${cart.length}`);
}