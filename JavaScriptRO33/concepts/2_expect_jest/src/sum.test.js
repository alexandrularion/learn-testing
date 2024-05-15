const sum = require("./sum");

/**
 * MATCHERS: Truthiness
 *  - toBe
 *  - toBeTruthy
 *  - toBeNull
 *  - toBeUndefined
 *  ...more
 *  VISIT: https://jestjs.io/docs/using-matchers#truthiness
 */

it("should return 6 when having 2 + 2 + 2", () => {
  expect.assertions(4);
  const value = sum(2, 2, 2);
  expect(value).toBe(6);
  expect(value).toBeTruthy();
  expect(value).not.toBeNull();
  expect(value).not.toBeUndefined();
});
