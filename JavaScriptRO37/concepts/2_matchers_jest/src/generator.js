/**
 *  Generate a number with six digits from 0 to 9 (each number), eg: 974652
 * @returns     {number}        i.e. 369876
 */
const generator = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

module.exports = {
  generator,
};
