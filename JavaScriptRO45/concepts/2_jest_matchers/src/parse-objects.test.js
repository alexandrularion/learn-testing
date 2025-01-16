const { parseObjects } = require("./parse-objects");

const errorMessage = "The data parameter should be an object.";

it("should throw an error if the data parameter is not an object", () => {
  expect(() => parseObjects(null)).toThrow(errorMessage);
  expect(() => parseObjects(undefined)).toThrow(errorMessage);
  expect(() => parseObjects(0)).toThrow(errorMessage);
  expect(() => parseObjects("hello world")).toThrow(errorMessage);
  expect(() => parseObjects([])).toThrow(errorMessage);
});
it("should return an empty array if the data parameter is an empty object", () => {
  const result = parseObjects({});

  // Tip: .toBe matcher is used only for primitive values like string, boolean, number etc.
  expect(result).toEqual([]); // Tip: toEqual is used also for non-primitive values like array, objects etc
});
it("should return an array of data if the data parameter is an object with one or more properties", () => {
  const users = {
    0: {
      name: "Ion",
    },
    1: {
      name: "John",
    },
  };
  const result = parseObjects(users);

  expect(result).toEqual([{ name: "Ion" }, { name: "John" }]);
  expect(result).toContainEqual({ name: "John" });
});
