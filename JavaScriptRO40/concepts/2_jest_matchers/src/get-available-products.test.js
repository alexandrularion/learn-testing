const getAvailableProducts = require("./get-available-products");

test("should return only the products that are available", () => {
  const products = [
    { id: 1, name: "Laptop", inStock: true, quantity: 10 },
    { id: 2, name: "Mouse", inStock: false, quantity: 0 },
    { id: 3, name: "Keyboard", inStock: true, quantity: 100 },
  ];

  const availableProducts = getAvailableProducts(products); // [{ id: 1, name: "Laptop", inStock: true, quantity: 10 }, { id: 3, name: "Keyboard", inStock: true, quantity: 100 }]

  expect(availableProducts).toHaveLength(2);
  expect(availableProducts).toEqual([
    { id: 1, name: "Laptop", inStock: true, quantity: 10 },
    { id: 3, name: "Keyboard", inStock: true, quantity: 100 },
  ]);
  expect(availableProducts).toContainEqual({
    id: 1,
    name: "Laptop",
    inStock: true,
    quantity: 10,
  });
});
