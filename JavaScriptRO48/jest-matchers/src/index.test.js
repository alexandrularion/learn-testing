const { bankGreeting } = require("./index"); // Common JS Import

describe("when calling bankGreeting function", () => {
  // Inainte de fiecare test
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  // Testele noastre
  test("should return greeting if userName parameter was passed as string", () => {
    const mockData = new Date(0, 0, 0, 19, 30, 0);
    jest.spyOn(global, "Date").mockImplementation(() => mockData);

    const greeting = bankGreeting("Barosane");

    console.debug(greeting); // "Good evening, Barosane"

    expect(greeting).toBe("Good evening, Barosane");
  });

  test("should return morning greeting if hour is between 00:00 -> 10:59", () => {
    const mockData = new Date(0, 0, 0, 8, 0, 0);
    jest.spyOn(global, "Date").mockImplementation(() => mockData);

    const greeting = bankGreeting("John");

    console.debug(greeting); // "Good morning, John"

    expect(greeting).toBe("Good morning, John");
  });

  test("should return afternoon greeting if hour is between 11:00 -> 17:59", () => {
    const mockData = new Date(0, 0, 0, 14, 29, 0);
    jest.spyOn(global, "Date").mockImplementation(() => mockData);

    const greeting = bankGreeting("Ion");

    console.debug(greeting); // "Good afternoon, Ion"

    expect(greeting).toBe("Good afternoon, Ion");
  });

  test("should throw an error if userName parameter is missing", () => {
    expect(() => bankGreeting()).toThrow();
    expect(() => bankGreeting()).toThrow("userName parameter is missing");
  });
});
