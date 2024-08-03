const calculateTotalPrice = (cartItems) => {
  if (cartItems && cartItems.length > 0) {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
  return 0;
};

module.exports = calculateTotalPrice;
