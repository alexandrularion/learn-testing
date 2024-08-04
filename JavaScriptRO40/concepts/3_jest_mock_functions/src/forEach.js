const forEach = (array, callback) => {
  for (const item of array) {
    callback(item);
  }
};

module.exports = forEach;
