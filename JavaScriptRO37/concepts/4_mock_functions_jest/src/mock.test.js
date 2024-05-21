const { forEach } = require("./mock");

const mockCallback = jest.fn((item) => item + 5);

test("mock the forEach function", () => {
  forEach([50, 39, 100], mockCallback);

  expect.assertions(4);
  expect(mockCallback.mock.calls).toHaveLength(3);
  expect(mockCallback.mock.calls[0][0]).toBe(50);
  expect(mockCallback.mock.calls[1][0]).toBe(39);
  expect(mockCallback.mock.calls[2][0]).toBe(100);
});

// [[50,90], [39], [100]];
// [0][0] = 50
// [0][1] = 90
// [1][0] = 39
// [2][0] = 100
