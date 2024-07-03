const lottoNumbers = require("./lottoNumbers");

/**
 * MATCHERS: Arrays and iterables
 * - toContain
 * - toHaveLength
 * VISIT: https://jestjs.io/docs/using-matchers#arrays-and-iterables
 */
describe("when testing the lotto numbers array", () => {
  it("should have the length of 6", () => {
    expect.assertions(1);
    expect(lottoNumbers).toHaveLength(6);
  });

  it("should include the following numbers: 6, 10", () => {
    expect.assertions(2);
    expect(lottoNumbers).toContain(6);
    expect(lottoNumbers).toContain(10);
  });
});
