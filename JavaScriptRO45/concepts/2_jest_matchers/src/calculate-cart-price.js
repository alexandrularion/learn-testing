/**
 * Calcualte the total price of all the products within the cart
 * @param   {Array<object>} cartItems [{ price: 20, quantity: 3, name: "My product"},...]
 * @returns {number}                  i.e. 100.00
 */
const calculateCartPrice = (cartItems) => {
  if (cartItems.length === 0) {
    return 0;
  }
  if (cartItems.length === 1) {
    // cartItems[0] = first product
    return parseFloat(cartItems[0].price) * parseFloat(cartItems[0].quantity);
  }

  let total = 0;
  cartItems.forEach((product) => {
    // product = { price: 20, quantity: 5, name: "My Product"}
    total = total + parseFloat(product.price) * parseFloat(product.quantity);
    // total += product.price * product.quantity;
  });

  return total;
};

module.exports = {
  calculateCartPrice,
};
