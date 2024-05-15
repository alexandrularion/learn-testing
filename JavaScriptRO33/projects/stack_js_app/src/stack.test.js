const Stack = require("./stack");

describe("Stack functionality", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("should be empty when instantiated", () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });
  it("should push to the top", () => {
    const spyPush = jest.spyOn(stack, "push");
    stack.push("🫒");

    expect(spyPush).toHaveBeenCalledTimes(1);
    expect(spyPush).toHaveBeenCalledWith("🫒");

    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("🫒");
    expect(stack.items).toEqual({
      0: "🫒",
    });
  });
  it("should pop off", () => {
    const spyPush = jest.spyOn(stack, "push");
    const spyPop = jest.spyOn(stack, "pop");

    stack.push("🫒");
    expect(spyPush).toHaveBeenCalledWith("🫒");

    stack.push("🥝");
    expect(spyPush).toHaveBeenCalledWith("🥝");

    stack.push("🥝");
    expect(spyPush).toHaveBeenCalledWith("🥝");

    stack.pop();

    expect(spyPush).toHaveBeenCalledTimes(3);
    expect(spyPop).toHaveBeenCalledTimes(1);
    expect(spyPop).toHaveBeenCalledWith();

    expect(stack.top).toBe(1);
    expect(stack.items).toEqual({
      0: "🫒",
      1: "🥝",
    });
  });
});
