/**
 * Find and replace all the words in the correct position of the identifiers
 * @param   {string}         text           i.e. "Profile of - {text},{text}"
 * @param   {string[]}       replacements   i.e. ["John Doe","Jane Doe"]
 * @param   {string=}        identifier     i.e. {text}
 * @returns {string}                        i.e. "Profile of - John Doe, Jane Doe"
 */
const getLabel = (text, replacements, identifier = "{text}") => {
  let result = text;
  replacements.forEach((word) => {
    result = result.replace(identifier, String(word));
  });
  return result;
};

module.exports = {
  getLabel,
};
