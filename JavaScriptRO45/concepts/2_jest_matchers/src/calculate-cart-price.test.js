const { calculateCartPrice } = require("./calculate-cart-price");

/**
 Numbers
 Matchers: toBeGreaterThan, toBeGreaterThanOrEqual, toBeLessThan, toBeLessThanOrEqual, toBe, toEqual, toBeCloseTo
 URL: https://jestjs.io/docs/using-matchers#numbers
 */

it("should return the total price if there are products within the cart", () => {
  const products = [
    {
      name: "My product",
      quantity: 5,
      price: 20.99,
    },
    {
      name: "My product 2",
      quantity: 3,
      price: 129.35,
    },
    {
      name: "My product 3",
      quantity: 1,
      price: 100,
    },
  ];
  const result = calculateCartPrice(products);

  expect(result).toEqual(5 * 20.99 + 3 * 129.35 + 100);
  expect(result).toBe(5 * 20.99 + 3 * 129.35 + 100);
  expect(result).toBeGreaterThan(0);
});
it("should return the total price equal to 0 if there are no products within the cart", () => {
  const products = [];
  const result = calculateCartPrice(products);

  expect(result).toEqual(0);
  expect(result).toBe(0);
});
it("should return the total price even if the price or quantity are strings which contain numbers", () => {
  const products = [
    {
      name: "My product",
      quantity: 5,
      price: "20.99",
    },
    {
      name: "My product 2",
      quantity: "3",
      price: 129.35,
    },
  ];
  const result = calculateCartPrice(products);

  expect(result).toEqual(5 * 20.99 + 3 * 129.35);
  expect(result).toBe(5 * 20.99 + 3 * 129.35);
  expect(result).toBeGreaterThan(0);
});
it("should return the total price even if there is only one product within the cart", () => {
  const products = [{ name: "My product", price: 299.99, quantity: 8 }];
  const result = calculateCartPrice(products);

  expect(result).toEqual(299.99 * 8);
  expect(result).toBeCloseTo(299.99 * 8);
  expect(result).not.toBe(0);
});
