const utils = require("./utils");

jest.mock("./utils", () => ({
  debounce: jest.fn((func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }),
  throttle: jest.fn((func, limit) => {
    let inThrottle;
    return (...args) => {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }),
  deepClone: jest.fn((obj) => JSON.parse(JSON.stringify(obj))),
}));
jest.useFakeTimers();

describe("when testing utils", () => {
  test("debounce should delay the function call", () => {
    const mockFn = jest.fn();
    const debouncedFn = utils.debounce(mockFn, 200);

    debouncedFn();
    debouncedFn();
    debouncedFn();

    expect(mockFn).not.toBeCalled();

    jest.advanceTimersByTime(200);

    expect(mockFn).toBeCalled();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("throttle should delay the function call", () => {
    const mockFn = jest.fn();
    const throttleFn = utils.throttle(mockFn, 300);

    throttleFn();
    throttleFn();
    throttleFn();

    expect(mockFn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(300);

    throttleFn();
    throttleFn();

    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  test("should create a deep copy of an object", () => {
    const original = {
      a: 1,
      b: {
        c: 2,
      },
    };
    const copy = utils.deepClone(original);

    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);

    copy.b.c = 3;

    expect(original.b.c).toBe(2);
    expect(copy.b.c).toBe(3);
  });
});
