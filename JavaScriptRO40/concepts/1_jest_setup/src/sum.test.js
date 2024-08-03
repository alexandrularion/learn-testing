const sum = require("./sum");

test("sum functionality", () => {
  // all we want to test
  const totalSum = sum(10, 5); // 15

  expect(totalSum).toBe(15); // will pass
  //   expect(totalSum).toBe(12); // will fail
});

// it is an alias for "test"
// it("should make the sum of a + b", () => {
//   // all we want to test
// });
