const combine = require("./combine");

/**
 * MATCHERS: Strings
 * - toMatch
 * - not.toMatch
 * VISIT: https://jestjs.io/docs/using-matchers#strings
 */

describe("combine functionality", () => {
  // Before each test executes
  beforeEach(() => {});

  // After each test is executed
  afterEach(() => {});

  // Before all the tests are executed
  beforeAll(() => {});

  // After all the tests are executed
  afterAll(() => {});

  it("should return 'John Doe' when having firstName 'John' and lastName 'Doe'", () => {
    expect.assertions(2);

    const value = combine("John", "Doe");
    expect(value).toBe("John Doe");
    expect(value).toMatch(/Doe/);
  });
  it("should not have 'pop'as firstName when having firstName 'John' and lastName 'Doe'", () => {
    expect.assertions(2);

    const value = combine("John", "Doe");
    expect(value).toBe("John Doe");
    expect(value).not.toMatch(/pop/);
  });
});
