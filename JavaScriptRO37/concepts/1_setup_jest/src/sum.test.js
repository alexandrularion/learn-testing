const sumModule = require("./sum");

describe("when calling the sum function", () => {
  test("it should make the sum of a and b params", () => {
    expect(2 + 2).toBe(4); // test scucceded
    expect(2 + 3).toBe(5); // test failed
  });

  it("should make the sum of a and b params", () => {
    expect(sumModule.sum(2, 2)).toBe(4);
    expect(sumModule.sum(9999, 3000000)).toBe(3009999);
  });

  it("should not return NaN if a or b params is not a number", () => {
    expect(sumModule.sum(undefined, 90)).toBe(0);
  });

  it("should return 0 if a or b params are NaN", () => {
    expect(sumModule.sum(NaN, NaN)).toBe(0);
  });
});
