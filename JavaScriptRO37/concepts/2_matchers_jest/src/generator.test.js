const { generator } = require("./generator");

/**
 * MATCHERS: Numbers
 * - toBeGreaterThan
 * - toBeGreaterThanOrEqual
 * - toBeLessThan
 * - toBeLessThanOrEqual
 * - toBe
 * VISIT: https://jestjs.io/docs/using-matchers#numbers
 */
describe("when calling the generator function", () => {
  it("should generate a 6 digits number", () => {
    const randomNumber = generator();

    expect.assertions(4);
    expect(randomNumber).toBeGreaterThan(100000);
    expect(randomNumber).toBeGreaterThanOrEqual(100000);
    expect(randomNumber).toBeLessThan(1000000);
    expect(randomNumber).toBeLessThanOrEqual(999999);
  });
});
