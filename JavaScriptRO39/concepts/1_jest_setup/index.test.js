const sum = require("./index");

test("when calling the sum with a = 2, b = 4 the result should be 6", () => {
  const result = sum(2, 4);
  expect(result).toBe(6);
});
