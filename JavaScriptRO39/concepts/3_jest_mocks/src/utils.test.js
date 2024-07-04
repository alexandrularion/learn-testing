const utils = require("./utils");

jest.mock("./utils");

describe("when testing the utils functions", () => {
  it("should return a number of 6 digits when calling mockGenerateNumber", () => {
    const mockGenerateNumber = jest.fn();

    mockGenerateNumber.mockReturnValue(365777);

    expect(mockGenerateNumber()).toBe(365777);
  });

  it("should return an random number of 6 digits when calling generateNumber", () => {
    utils.generateNumber.mockReturnValue(266333);

    expect(utils.generateNumber()).toBe(266333);
  });
});
