const { calculateTotal, getDiscount } = require("./utils");

test("example of mocking function", function () {
  // Tip: jest.fn() - creates a mock function - fake function
  const greet = jest.fn().mockReturnValue("Hello");

  greet("John");
  greet("Jane");

  console.debug(greet.mock.calls); // [['John'], ['Jane']]
  console.debug(greet.mock.calls.length); // 2

  expect(greet).toHaveBeenCalledTimes(2);
  expect(greet).toHaveBeenNthCalledWith(1, "John"); // 1 - first call
  expect(greet).toHaveBeenNthCalledWith(2, "Jane"); // 2 - second call

  expect(greet).toHaveNthReturnedWith(1, "Hello");
  expect(greet).toHaveNthReturnedWith(2, "Hello");
});

test("calculates total using a mock discount", function () {
  const mockGetDiscount = jest.fn().mockReturnValue(20);
  const total = calculateTotal(100, mockGetDiscount);

  expect(total).toBe(80);
  expect(mockGetDiscount).toHaveBeenCalledWith(100);
});
