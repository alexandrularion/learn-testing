const Vehicle = require("./vehicle");

let vehicle1;

beforeAll(() => {
  vehicle1 = new Vehicle();
});

describe("when testing vehicle functionality", () => {
  test("should turn on the engine", () => {
    const spy = jest.spyOn(vehicle1, "turnOnEngine");
    vehicle1.turnOnEngine();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(vehicle1.engineStatus).toBe("on");
  });

  test("should turn off the engine", () => {
    const spy = jest.spyOn(vehicle1, "turnOffEngine");
    vehicle1.turnOffEngine();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(vehicle1.engineStatus).toBe("off");
  });

  test("should increase brake with 75%", () => {
    const spy = jest.spyOn(vehicle1, "doBrake");
    vehicle1.doBrake(75);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(vehicle1.brakeUsage).toBe(75);

    vehicle1.doBrake(-75);

    expect(vehicle1.brakeUsage).toBe(0);
  });
});
