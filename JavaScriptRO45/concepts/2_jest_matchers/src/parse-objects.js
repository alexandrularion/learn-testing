/**
 * Parse any object and transform it into a new array
 * @param {object} data   i.e. { 0: { name: "Ion", age: 20 }, ...}
 * @returns  {Array}
 */
const parseObjects = (data) => {
  if (data === null || Array.isArray(data) || typeof data !== "object") {
    throw new Error("The data parameter should be an object.");
  }

  const newUsers = Object.values(data);

  if (Array.isArray(newUsers)) {
    return newUsers;
  }
};

module.exports = {
  parseObjects,
};
