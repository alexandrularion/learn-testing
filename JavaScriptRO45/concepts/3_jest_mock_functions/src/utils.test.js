const { add, calculate } = require("./utils");

describe("when testing the calculate functionality", () => {
  // my tests..
  it("should add two numbers", () => {
    expect(add(2, 2)).toBe(4);
    expect(add(5, 50)).toEqual(55);
  });

  it("should calculate with another operation function and return the result (difference)", () => {
    const mockOperation = jest.fn((a, b) => a - b); // Mock function implementation
    const result = calculate(5, 8, mockOperation);

    expect(result).toBe(-3);
    expect(mockOperation).toHaveBeenCalledTimes(1);
    expect(mockOperation).toHaveBeenCalledWith(5, 8);
  });

  it("should calculate with another operation function and return the result (addition)", () => {
    const mockOperation = jest.fn((a, b) => a + b);
    const result = calculate(10, 100, mockOperation);

    expect(result).toBe(10 + 100);
    expect(mockOperation).toHaveBeenCalledTimes(1);
    expect(mockOperation).toHaveBeenCalledWith(10, 100);
  });
});
