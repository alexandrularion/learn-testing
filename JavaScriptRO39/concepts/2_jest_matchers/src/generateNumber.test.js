const generateNumber = require("./generateNumber");

/**
 * MATCHERS: Numbers
 * - toBeGreaterThan
 * - toBeGreaterThanOrEqual
 * - toBeLessThan
 * - toBeLessThanOrEqual
 * - toBe
 * VISIT: https://jestjs.io/docs/using-matchers#numbers
 */
describe("when testing the generateNumber functionality", () => {
  it("should generate a 6 digits number", () => {
    const randomNumber = generateNumber();

    expect.assertions(4);
    expect(randomNumber).toBeGreaterThan(100000);
    expect(randomNumber).toBeGreaterThanOrEqual(100001);
    expect(randomNumber).toBeLessThan(1000000);
    expect(randomNumber).toBeLessThanOrEqual(999999);
  });
});
