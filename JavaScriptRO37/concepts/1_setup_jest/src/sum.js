const CONSTANTS = {
  A: 10,
  B: 20,
};

const checkIfValid = (a, b) => {
  return (
    typeof a === "number" &&
    typeof b === "number" &&
    !Number.isNaN(a) &&
    !Number.isNaN(b)
  );
};

const sum = (a, b) => {
  const areParamsValid = checkIfValid(a, b); // Boolean: true or false
  if (areParamsValid) {
    return a + b;
  }
  return 0;
};

module.exports = {
  sum,
  checkIfValid,
  CONSTANTS,
};
