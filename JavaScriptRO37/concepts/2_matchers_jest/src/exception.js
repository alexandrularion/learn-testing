const loadAssets = () => {
  // my code
  let loadingPercent = 100;
  return new Promise((resolve, reject) => {
    if (loadingPercent === 100) {
      resolve(loadingPercent);
    } else {
      reject("Can't load all the assets.");
    }
  });
};

module.exports = {
  loadAssets,
};
