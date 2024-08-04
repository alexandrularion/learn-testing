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

  test("should turn on the ac", () => {
    const spy = jest.spyOn(vehicle1, "turnOnAc");
    vehicle1.turnOnAc();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(vehicle1.acStatus).toBe("on");
  });

  test("should turn off the ac", () => {
    const spy = jest.spyOn(vehicle1, "turnOffAc");
    vehicle1.turnOffAc();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(vehicle1.acStatus).toBe("off");
  });

  test("should steer vehicle", () => {
    const spy = jest.spyOn(vehicle1, "doDirection");
    vehicle1.doDirection("left");
    expect(spy).toHaveBeenCalledTimes(1);
    expect(vehicle1.steeringWheelDirection).toBe("left");
    vehicle1.doDirection("centered");
    expect(vehicle1.steeringWheelDirection).toBe("centered");
  });
});
