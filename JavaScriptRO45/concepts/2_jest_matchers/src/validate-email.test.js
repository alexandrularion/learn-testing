const { validateEmail } = require("./validate-email");

/**
 Strings
 Matchers: toMatch
 URL: https://jestjs.io/docs/using-matchers#strings
 */

const errorMessage = "The email is not valid.";
const successMessage = "The email is valid.";

it("should return error message if the data is not a string", () => {
  const result = validateEmail(2);

  expect(result).toMatch(errorMessage);
});
it("should return error message if the data is string but is empty", () => {
  const result = validateEmail("");

  expect(result).toMatch(errorMessage);
});
it("should return error message if the data has an email but is not valid", () => {
  const result = validateEmail("alex.boss382");

  expect(result).toMatch(errorMessage);
});
it("should return success message if the data has an valid email.", () => {
  const result = validateEmail("alex.boss382@yahoo.com");

  expect(result).toMatch(successMessage);
});
