const CONSTANTS = {
  A: 10,
  B: 20,
};

const sum = (a, b) => {
  if (
    typeof a === "number" &&
    typeof b === "number" &&
    !Number.isNaN(a) &&
    !Number.isNaN(b)
  ) {
    return a + b;
  }
  return 0;
};

module.exports = {
  sum,
  CONSTANTS,
};
