// Exercise 2: toEqual
// Create a test that checks if the object "user" has the same properties and values as { name: 'John', age: 30 }.
describe("toEqual Matcher", () => {
  test('checks if user object is equal to { name: "John", age: 30 }', () => {
    const user = { name: "John", age: 30 };
    expect(user).toEqual({ name: "John", age: 30 });
  });
});
