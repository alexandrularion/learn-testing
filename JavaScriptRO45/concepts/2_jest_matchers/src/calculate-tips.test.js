const { calculateTips } = require("./calculate-tips");

/**
 Truthiness
 Matchers: toBeNull, toBeUndefined, toBeDefined, toBeTruthy, toBeFalsy
 URL: https://jestjs.io/docs/using-matchers#truthiness
 */

it("should return the tips for tier1, tier2 and tier3 based on the input", () => {
  const result = calculateTips(126, true);

  expect(result.tier1).toBeTruthy();
  expect(result.tier2).toBeTruthy();
  expect(result.tier3).toBeTruthy();

  expect(result.tier1).not.toBeUndefined(); // opposite of toBeDefined()
  expect(result.tier2).toBeDefined();
  expect(result.tier3).toBeDefined();

  expect(result.tier1).not.toBeNull();
  expect(result.tier2).not.toBeNull();
  expect(result.tier3).not.toBeNull();

  expect(result.tier2).toBe((10 / 100) * 126); // 10%
  expect(result.tier3).toBe((20 / 100) * 126); // 20%
});

it("should return tips for tier1, tier2, and tier3 equal to 0 if the total is 0", () => {
  const result = calculateTips(0, true);

  expect(result.tier1).toBeFalsy();
  expect(result.tier2).toBeFalsy();
  expect(result.tier3).toBeFalsy();

  expect(result.tier1).not.toBeUndefined(); // opposite of toBeDefined()
  expect(result.tier2).toBeDefined();
  expect(result.tier3).toBeDefined();

  expect(result.tier1).not.toBeNull();
  expect(result.tier2).not.toBeNull();
  expect(result.tier3).not.toBeNull();

  expect(result.tier1).toBe(0);
  expect(result.tier2).toBe(0);
  expect(result.tier3).toBe(0);
});

it("should return tips for tier1, tier2, tier3 equal to 0 if the isRequired is false", () => {
  const result = calculateTips(359, false);

  expect(result.tier1).toBeFalsy();
  expect(result.tier2).toBeFalsy();
  expect(result.tier3).toBeFalsy();

  expect(result.tier1).not.toBeUndefined(); // opposite of toBeDefined()
  expect(result.tier2).toBeDefined();
  expect(result.tier3).toBeDefined();

  expect(result.tier1).not.toBeNull();
  expect(result.tier2).not.toBeNull();
  expect(result.tier3).not.toBeNull();

  expect(result.tier1).toBe(0);
  expect(result.tier2).toBe(0);
  expect(result.tier3).toBe(0);
});
