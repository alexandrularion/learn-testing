const sum = require("./sum");

test("sum of a + b = 4, where a = 2 and b = 2", function () {
  const sumResult = sum(2, 2);

  expect(sumResult).toBe(4);
});

test("sum of a + b != 6, where a = 2 and b = 5", function () {
  const sumResult = sum(2, 5);

  expect(sumResult).not.toBe(6);
});
