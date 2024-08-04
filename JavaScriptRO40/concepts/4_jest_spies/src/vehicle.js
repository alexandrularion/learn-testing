class Vehicle {
  constructor() {
    this.engineStatus = "off"; // on | off
    this.brakeUsage = 0; // 0 -> 100
    this.acStatus = "off"; // on | off
    this.steeringWheelDirection = "centered"; // left | centered | right
  }

  turnOnEngine() {
    this.engineStatus = "on";
  }
  turnOffEngine() {
    this.engineStatus = "off";
  }

  doBrake(usage) {
    this.brakeUsage += usage; // usage may be negative
  }

  turnOnAc() {
    this.acStatus = "on";
  }
  turnOffAc() {
    this.acStatus = "off";
  }

  doDirection(orientation) {
    this.steeringWheelDirection = orientation;
  }
}

module.exports = Vehicle;
