// Exercise 5: toThrow
// Create a test that checks if the function "compileCode" throws an error when called.
describe("toThrow Matcher", () => {
  test("checks if compileCode throws an error", () => {
    function compileCode() {
      throw new Error("Compilation error");
    }
    // Your test code here
  });
});
