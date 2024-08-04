const forEach = require("./forEach");

describe("when testing the forEach functionality", () => {
  test("should call the callback and retrieve the right item", () => {
    const mockCallback = jest.fn((item) => {
      return `${item}_ro`;
    });

    forEach(["john_doe", "jane_smith", "kanye_west", "mr_beast"], mockCallback);

    expect.assertions(5);
    expect(mockCallback.mock.calls).toHaveLength(4);
    expect(mockCallback.mock.calls[0][0]).toBe("john_doe");
    expect(mockCallback.mock.calls[2][0]).toBe("kanye_west");
    expect(mockCallback.mock.results[0].value).toBe("john_doe_ro");
    expect(mockCallback.mock.results[3].value).toBe("mr_beast_ro");
  });
});
