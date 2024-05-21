const video = {
  volume: 10,
  play: () => {
    return true;
  },
  stop: () => {
    return 39000; // 39s
  },
  increaseVolume: function (amount) {
    this.volume += amount;
    return this.volume;
  },
};

module.exports = {
  video,
};
