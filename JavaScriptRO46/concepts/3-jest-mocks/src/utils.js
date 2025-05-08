function getDiscount(price) {
  return price > 50 ? 10 : 5;
}

function calculateTotal(price, getDiscount) {
  return price - getDiscount(price);
}

module.exports = {
  getDiscount,
  calculateTotal,
};
