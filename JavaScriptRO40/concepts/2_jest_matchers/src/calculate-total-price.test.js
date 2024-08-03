const calculateTotalPrice = require("./calculate-total-price");

test("should calculate the total price of the cart items", () => {
  const cartItems = [
    { id: 1, name: "Laptop", price: 1000, quantity: 1 },
    { id: 2, name: "Mouse", price: 50, quantity: 2 },
  ];

  const totalPrice = calculateTotalPrice(cartItems); // 1100

  expect(totalPrice).toEqual(1100);
  expect(totalPrice).toBeGreaterThan(0);
  expect(totalPrice).toBeLessThanOrEqual(5000);
});

test("should not calculate the total price if the cart items is undefined", () => {
  const totalPrice = calculateTotalPrice();

  expect(totalPrice).toEqual(0);
  expect(totalPrice).toBeFalsy();
  expect(totalPrice).not.toBeUndefined();
});

test("shoult not calculate the total price if the cart items is an empty array", () => {
  const cartItems = [];
  const totalPrice = calculateTotalPrice(cartItems);

  expect(totalPrice).toBe(0);
  expect(totalPrice).toBeDefined();
  expect(totalPrice).not.toBeTruthy();
});
