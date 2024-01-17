/**
 * ... (spread operator)
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */

/**
 * This method will concatenate two lists in one
 * @param   {Array}    list1     i.e. ["mere","pere", "prune"]
 * @param   {Array}    list2     i.e. ["strguri","piersici","afine"]
 * @returns {Array}              i.e. ["mere","pere", "prune","strguri","piersici","afine"]
 */
const combine = (list1, list2) => [...list1, ...list2];

module.exports = combine;
