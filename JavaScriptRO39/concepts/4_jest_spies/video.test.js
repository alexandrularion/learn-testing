const video = require("./video");

afterEach(() => {
  // do something
  jest.restoreAllMocks();
});

beforeEach(() => {
  // do something
});

describe("when testing video functionality", () => {
  it("should play the video and return true", () => {
    const spy = jest.spyOn(video, "play");
    const isPlaying = video.play();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(isPlaying).toBe(true);
  });

  it("should stop the video and return the current timeline", () => {
    const spy = jest.spyOn(video, "stop");
    const timeline = video.stop();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(timeline).toBe(39);
  });

  it("should decreaseVolume with 5 and return it", () => {
    const spy = jest.spyOn(video, "decreaseVolume");
    const volume = video.decreaseVolume();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(volume).toBe(95);
  });

  it("should decreaseVolume with specified value and return it", () => {
    const spy = jest.spyOn(video, "decreaseVolume");
    const volume = video.decreaseVolume(10);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(volume).toBe(85);
  });
});
