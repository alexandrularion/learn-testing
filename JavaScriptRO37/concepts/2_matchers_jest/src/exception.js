const loadAssets = (loadingPercent) => {
  // my code
  if (loadingPercent === 100) {
    console.log("Assets were loaded.");
  } else {
    console.log("Can't load all the assets.");
    throw new Error();
  }
};

module.exports = {
  loadAssets,
};
