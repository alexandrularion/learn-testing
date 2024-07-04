/**
 * Iterates over an array and calls a function for each step
 * @param {Array}       items       i.e. ["apple","orange"]
 * @param {Function}    callback    i.e. (item) => { doSomething(); //...}
 */
function forEach(items, callback) {
  for (const item of items) {
    callback(item);
  }
}

module.exports = forEach;
