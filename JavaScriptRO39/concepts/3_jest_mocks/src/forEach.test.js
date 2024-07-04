const forEach = require("./forEach");

describe("when testing the forEach functionality", () => {
  test("should call the callback and retrieve the item", () => {
    const mockCallback = jest.fn((lottoNumber) => lottoNumber + 3);

    forEach([6, 10, 12, 39, 40, 45], mockCallback);

    expect.assertions(4);
    expect(mockCallback.mock.calls).toHaveLength(6);
    expect(mockCallback.mock.calls[0][0]).toBe(6);
    expect(mockCallback.mock.calls[3][0]).toBe(39);
    // expect(6).toBe(6)
    expect(mockCallback.mock.results[0].value).toBe(9);
  });
});
