const { getLabel } = require("./label");

/**
 * MATCHERS: Strings
 * - toMatch
 * - not.toMatch
 * VISIT: https://jestjs.io/docs/using-matchers#strings
 */
describe("when calling the getLabel function - 1", () => {
  it("should format the 'Hello, {text}' text", () => {
    const label = getLabel("Hello, {text}", ["Popescu Ion"]); // Hello, Popescu Ion

    expect.assertions(2);
    expect(label).toMatch(/Hello, Popescu Ion/);
    expect(label).not.toMatch(/Hello, {text}/);
  });

  it("should format the text with {value} identifier", () => {
    const label = getLabel("Username: {value}", ["Will Smith"], "{value}");

    expect.assertions(2);
    expect(label).toMatch(/Username: Will Smith/);
    expect(label).not.toMatch(/Username: {value}/);
  });
});
describe("when calling the getLabel function - 2", () => {
  it("should return the same text input if replacements list is empty", () => {
    const label = getLabel("Username: {text}", []);

    expect.assertions(1);
    expect(label).toMatch(/Username: {text}/);
  });

  it("should throw an error if text input is not a string", () => {
    expect(() => getLabel(undefined, [])).toThrow(
      "The text param must be a string."
    );
  });
});
