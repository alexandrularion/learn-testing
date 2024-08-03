const generateGreeting = require("./generate-greeting");

test("when calling generateGreeting should receive the right text if user is defined", () => {
  const user = {
    name: {
      first: "Dorel",
      last: "Popescu",
    },
  };
  const text = generateGreeting(user); // "Hello, Dorel Popescu! Welcome back."

  expect(text).toMatch(/Dorel Popescu/);
  expect(text).toMatch(/Welcome back./);
  expect(text).toBeTruthy();
  expect(text).not.toBeNull();
});

test("when calling generateGreent should not receive the right text if user is undefined", () => {
  const text = generateGreeting();

  expect(text).not.toMatch(/Dorel Popescu/);
  expect(text).toMatch(/Hello, guest! Welcome back./);
});
