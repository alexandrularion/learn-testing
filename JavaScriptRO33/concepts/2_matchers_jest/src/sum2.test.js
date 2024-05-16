const sum2 = require("./sum2");

/**
 * MATCHERS: Numbers
 * - toBeGreaterThan
 * - toBeGreaterThanOrEqual
 * - toBeLessThan
 * - toBeLessThanOrEqual
 * - toBe
 * VISIT: https://jestjs.io/docs/using-matchers#numbers
 */
it("should return 8 when having 6 + 2", () => {
  expect.assertions(5);

  const sum = sum2(6, 2);

  expect(sum).toBeGreaterThan(6);
  expect(sum).toBeGreaterThanOrEqual(8);
  expect(sum).toBeLessThan(10);
  expect(sum).toBeLessThanOrEqual(8);
  expect(sum).toBe(8);
});
