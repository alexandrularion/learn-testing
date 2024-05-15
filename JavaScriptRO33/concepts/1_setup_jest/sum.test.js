const sum = require("./sum");

test("2 + 2 should equal 4", () => {
  expect(sum(2, 2)).toBe(4);
  // expect(2 + 2).toBe(4);
  // expect(4).toBe(4);
});
