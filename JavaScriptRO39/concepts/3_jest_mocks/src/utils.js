/**
 * Generate a number with six digits from 0 to 9 (each number), eg: 974652
 * @returns     {number}        i.e. 369876
 */
const generateNumber = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

/**
 * Find and replace all the words in the correct position of the identifiers
 * @param   {string}         text           i.e. “Profile of - {text},{text}”
 * @param   {string[]}       replacements   i.e. [“John Doe”,“Jane Doe”]
 * @param   {string=}        identifier     i.e. {text}
 * @returns {string}                        i.e. “Profile of - John Doe, Jane Doe”
 */
const getLabel = (text, replacements, identifier = "{text}") => {
  if (typeof text !== "string") {
    throw new Error("The text param must be a string.");
  }
  let result = text;
  replacements.forEach((word) => {
    result = result.replace(identifier, String(word));
  });
  return result;
};

module.exports = {
  generateNumber,
  getLabel,
};
