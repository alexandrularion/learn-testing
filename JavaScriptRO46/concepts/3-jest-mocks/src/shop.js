const { getDiscount } = require("./utils");

function calculateTotal(price) {
  return price - getDiscount(price);
}

module.exports = {
  calculateTotal,
};
