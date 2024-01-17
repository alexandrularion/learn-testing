const video = {
  play() {
    return true;
  },
  forward(time) {
    return time + 5;
  },
};

test("when playing the video", () => {
  const spyPlayMethod = jest.spyOn(video, "play");
  const spyForwardMethod = jest.spyOn(video, "forward");

  const isPlaying = video.play();
  const currentTime = video.forward(30);

  expect(spyPlayMethod).toHaveBeenCalled();
  expect(spyPlayMethod).toHaveBeenCalledWith();
  expect(spyPlayMethod).toHaveBeenCalledTimes(1);
  expect(isPlaying).toBe(true);

  expect(spyForwardMethod).toHaveBeenCalled();
  expect(spyForwardMethod).toHaveBeenCalledWith(30);
  expect(spyForwardMethod).toHaveBeenCalledTimes(1);
  expect(currentTime).toBe(35);
});
