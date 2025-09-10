const { bankGreeting } = require("./index"); // Common JS Import

describe("when calling bankGreeting function", () => {
  // Testele noastre
  // beforeAll(() => {
  //   const mockData = new Date(0, 0, 0, 19, 30, 0);
  //   jest.spyOn(global, "Date").mockImplementation(() => mockData);
  // });

  // afterAll(() => {
  //   jest.restoreAllMocks();
  // });

  test("should return greeting if userName parameter was passed as string", () => {
    const mockData = new Date(0, 0, 0, 19, 30, 0);
    jest.spyOn(global, "Date").mockImplementation(() => mockData);

    const greeting = bankGreeting("Barosane");

    expect(greeting).toBe("Good evening, Barosane");
  });

  test("...", () => {
    //
  });
});

//
