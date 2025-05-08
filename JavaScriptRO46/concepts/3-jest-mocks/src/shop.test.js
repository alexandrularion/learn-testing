jest.mock("./utils", function () {
  return {
    getDiscount: jest.fn(() => 10),
  };
});

const { calculateTotal } = require("./shop");
const { getDiscount } = require("./utils");

test("calcualtes total with mocked getDiscount", function () {
  const result = calculateTotal(50);

  expect(result).toBe(40);
  expect(getDiscount).toHaveBeenCalledTimes(1);
  expect(getDiscount).toHaveBeenCalledWith(50);
});
