test("mock implementation of a basic function", () => {
  const mock = jest.fn((a, b, c) => a + b + c);

  expect(mock(1, 2, 3)).toBe(6);
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith(1, 2, 3);
});

test("mock implementation of a basic function 2", () => {
  const mock = jest.fn((a, b, c) => a + b + c);

  expect(mock(1, 2, 3)).toBe(6);
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith(1, 2, 3);
  mock.mockReturnValueOnce(10);
  expect(mock()).toBe(10);

  mock.mockReturnValue(10);
  expect(mock()).toBe(10);
  expect(mock()).toBe(10);
  expect(mock()).toBe(10);
  expect(mock()).toBe(10);
  expect(mock()).toBe(10);
});
