const video = {
  volume: 100,
  play: () => {
    return true;
  },
  stop: () => {
    return 39; // seconds
  },
  decreaseVolume: function (amount = 5) {
    this.volume = this.volume - amount; // decrease the volume
    return this.volume;
  },
  increaseVolume: function (amount = 5) {
    this.volume = this.volume + amount; // increase the volume
    return this.volume;
  },
};

module.exports = video;
