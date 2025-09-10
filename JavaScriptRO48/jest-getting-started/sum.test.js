const sum = require("./sum"); // Common JS
// import sum from "./sum"; // ES6 Modules

it("should give 8 when sum 4 + 4", () => {
  const result = sum(4, 4);

  expect(result).toBe(8);
});
