const ERROR_MESSAGES = {
  ASSETS_LOAD_FAILED: "Cannot load all the assets due to incompatibility.",
};

const loadAssets = () => {
  // my code
  throw new Error(ERROR_MESSAGES.ASSETS_LOAD_FAILED);
};

module.exports = {
  loadAssets,
  ERROR_MESSAGES,
};
