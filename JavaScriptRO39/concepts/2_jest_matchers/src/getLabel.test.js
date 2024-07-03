const getLabel = require("./getLabel");

/**
 * MATCHERS: Strings
 * - toMatch
 * - not.toMatch
 * VISIT: https://jestjs.io/docs/using-matchers#strings
 */
describe("when testing getLabel functionality", () => {
  it("should format the 'Good evening, {text}'", () => {
    const label = getLabel("Good evening, {text}", ["Bogdanel"]);

    expect.assertions(2);
    expect(label).toMatch(/Good evening, Bogdanel/);
    expect(label).not.toMatch(/Good evening, {text}/);
  });

  it("should format the text '/api/users/pages?page={page}' with {page} identifier", () => {
    const label = getLabel("/api/users/pages?page={page}", ["10"], "{page}");

    expect.assertions(2);
    expect(label).toMatch(/\/api\/users\/pages\?page=10/);
    expect(label).not.toMatch(/\/api\/users\/pages\?page={page}/);
  });

  it("should return the same text if the replacements array is empty", () => {
    const label = getLabel("Username: {text}", []);

    expect.assertions(1);
    expect(label).toMatch(/Username: {text}/);
  });

  it("should throw an error if text input is not a string", () => {
    expect(() => getLabel(2, ["do nothing"])).toThrow(
      "The text param must be a string."
    );
  });
});
