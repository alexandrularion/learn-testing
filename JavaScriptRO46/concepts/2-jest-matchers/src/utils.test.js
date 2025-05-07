const utils = require("./utils");

describe("when testing utils calculateCartTotalPrice fn", function () {
  test("it should return 0 if there is not item in items array", function () {
    const result = utils.calculateCartTotalPrice([]);

    expect(result).toBeDefined();
    expect(result).toEqual(0);
    expect(result).toBeFalsy();
  });
  test("it should return the total price based on price and quantity of one item", function () {
    const result = utils.calculateCartTotalPrice([
      { price: 23.4, quantity: 4 },
    ]);

    expect(result).toBeDefined();
    expect(result).toBeTruthy();
    expect(result).toBeGreaterThan(0);
    expect(result).toEqual(93.6);
  });
  test("it should return the total price based on price and quantity of all the items", function () {
    const result = utils.calculateCartTotalPrice([
      { price: 20, quantity: 3 },
      { price: 54.3, quantity: 10 },
      { price: "10", quantity: 3 }, // OK - because of parseFloat()
    ]);

    console.debug(result);

    expect(result).toBeDefined();
    expect(result).toBeTruthy();
    expect(result).toBeGreaterThan(0);
    expect(result).toBe(633);
  });
});

describe("when testing utils capitalizeText fn", function () {
  test("it should return an empty string if no text is given", function () {
    const text = utils.capitalizeText("");

    expect(text).toBe("");
    expect(text).toBeFalsy();
  });
  test("it should throw an error if the given text is not a string", function () {
    // {} - wrong data type, it only accepts strings
    expect(() => utils.capitalizeText({})).toThrow();
    expect(() => utils.capitalizeText({})).toThrow(
      "Just go and learn some JS :( "
    );
  });
  test("it should capitalize each word within a normal sentence", function () {
    const text = utils.capitalizeText("I am a senior software engineer.");

    expect(text).toBeTruthy();
    expect(text).toBeDefined();
    expect(text).toBe("I Am A Senior Software Engineer.");
    expect(text).toMatch(/Senior|Software|Engineer/);
  });
});
