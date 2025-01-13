const { initApp } = require("./index");

test("when running the initApp the return should be true", () => {
  const appInstance = initApp();

  expect(appInstance).toBe(true);
  // matcher (i.e. .toBe() )
});
