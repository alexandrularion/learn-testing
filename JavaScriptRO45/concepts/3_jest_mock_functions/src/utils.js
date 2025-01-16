const add = (a, b) => a + b;

const calculate = (a, b, operationFn) => {
  if (typeof operationFn !== "function") {
    throw new Error("The operationFn is not a function.");
  }
  return operationFn(a, b);
};

module.exports = {
  add,
  calculate,
};
