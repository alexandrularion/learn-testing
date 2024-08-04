// Exercise 3: toBeNull
// Create a test that checks if the variable "data" is null.
describe("toBeNull Matcher", () => {
  test("checks if data is null", () => {
    const data = null;
    expect(data).toBeNull();
  });
});
