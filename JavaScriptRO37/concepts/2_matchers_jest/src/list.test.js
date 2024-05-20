const { list } = require("./list");

/**
 * MATCHERS: Arrays and iterables
 * - toContain
 * - toHaveLength
 * VISIT: https://jestjs.io/docs/using-matchers#arrays-and-iterables
 */
describe("when validating the fruit list", () => {
  it("should have the length of 5", () => {
    expect.assertions(1);

    expect(list).toHaveLength(5);
  });

  it("should include 'mere' and 'cirese'", () => {
    expect.assertions(2);

    expect(list).toContain("mere");
    expect(list).toContain("cirese");
  });
});
