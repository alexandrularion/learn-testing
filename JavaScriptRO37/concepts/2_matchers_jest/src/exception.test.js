const { loadAssets } = require("./exception");

/**
 * MATCHERS: Exceptions
 * - toThrow()
 * - not.toThrow()
 * VISIT: https://jestjs.io/docs/using-matchers#exceptions
 */
describe("when calling the loadAssets function", () => {
  it("should load assets if loadingPercent is 100", () => {
    expect.assertions(1);
    expect(() => loadAssets(100)).not.toThrow();
  });
  it("should not load the assets if loadingPercent is less than 100", () => {
    expect.assertions(1);
    expect(() => loadAssets(99)).toThrow();
  });
});
