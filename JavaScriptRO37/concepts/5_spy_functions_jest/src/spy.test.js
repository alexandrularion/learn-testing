const { video } = require("./spy");

afterEach(() => {
  // restore the spy created with spyOn
  jest.restoreAllMocks();
});

test("should play video", () => {
  const spy = jest.spyOn(video, "play");
  const isPlaying = video.play(); // true

  expect.assertions(3);
  expect(spy).toHaveBeenCalled();
  expect(isPlaying).toBeTruthy();
  expect(isPlaying).toBe(true);
});

test("should stop video", () => {
  const spy = jest.spyOn(video, "stop");
  const timeline = video.stop(); // 39000ms (39s)

  expect(spy).toHaveBeenCalledTimes(1);
  expect(timeline).toBe(39000);
});

test("should increaseVolume of video", () => {
  const spy = jest.spyOn(video, "increaseVolume");
  const volume = video.increaseVolume(50);

  expect(spy).toHaveBeenCalledTimes(1);
  expect(volume).toBe(60);
  expect(video.volume).toBe(60);
});
