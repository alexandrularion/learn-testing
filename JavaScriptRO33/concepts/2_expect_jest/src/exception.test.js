const assets = require("./exception");

it("should throw an error if the assets are not compatible", () => {
  expect.assertions(2);
  expect(() => assets.loadAssets()).toThrow();
  expect(() => assets.loadAssets()).toThrow(
    assets.ERROR_MESSAGES.ASSETS_LOAD_FAILED
  );
});
