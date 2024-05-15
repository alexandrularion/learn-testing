const combine2 = require("./combine2");

/**
 * MATCHERS: Arrays and iterables
 * - toContain
 * - toHaveLength
 * VISIT: https://jestjs.io/docs/using-matchers#arrays-and-iterables
 */
it("should merge 2 arrays and return one array", () => {
  expect.assertions(4);

  const fruits1 = ["mere", "pere", "prune"];
  const fruits2 = ["strguri", "piersici222", "afine"];

  const result = combine2(fruits1, fruits2);

  expect(result).toContain(fruits2[2]);
  expect(result).toContain(fruits1[1]);
  expect(result).toContain(fruits1[2]);
  expect(result).toHaveLength(fruits1.length + fruits2.length);
});
