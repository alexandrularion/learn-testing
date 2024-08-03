const getAvailableProducts = (products) => {
  return products.filter((product) => product.inStock && product.quantity > 0);
};

module.exports = getAvailableProducts;
