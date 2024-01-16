const combine = require("./combine");

describe("combine functionality", () => {
  it("should return 'John Doe' when having firstName 'John' and lastName 'Doe'", () => {
    expect.assertions(2);

    const value = combine("John", "Doe");
    expect(value).toBe("John Doe");
    expect(value).toMatch(/Doe/);
  });
  it("nume test 2", () => {});
  it("nume test 3", () => {});
});
