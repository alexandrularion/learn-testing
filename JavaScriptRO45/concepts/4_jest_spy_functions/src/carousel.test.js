const { carousel } = require("./carousel");

let currentCarousel = { ...carousel };

afterEach(() => {
  jest.restoreAllMocks();
  if (currentCarousel.autoplayIntervalId) {
    clearInterval(currentCarousel.autoplayIntervalId);
    currentCarousel.autoplayIntervalId = null;
  }
});

beforeEach(() => {
  currentCarousel = { ...carousel };
});

describe("when testing carousel functionality", () => {
  it("should go to the next slide", () => {
    const spy = jest.spyOn(currentCarousel, "nextSlide");
    currentCarousel.nextSlide();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(currentCarousel.currentSlide).toBe(1);
  });
  it("should go to first slide when no slides are available", () => {
    const spy = jest.spyOn(currentCarousel, "nextSlide");
    currentCarousel.nextSlide(); // currentSlide = 1
    currentCarousel.nextSlide(); // currentSlide = 2
    currentCarousel.nextSlide(); // currentSlide = 0

    expect(spy).toHaveBeenCalledTimes(3);
    expect(currentCarousel.currentSlide).toBe(0);
  });
  it("should go to the previous slide", () => {
    const spy = jest.spyOn(currentCarousel, "prevSlide");
    currentCarousel.currentSlide = 2;
    currentCarousel.prevSlide();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(currentCarousel.currentSlide).toBe(1);
  });
  it("should go to the last slide when no slides are available", () => {
    const spy = jest.spyOn(currentCarousel, "prevSlide");
    currentCarousel.currentSlide = 0;
    currentCarousel.prevSlide();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(currentCarousel.currentSlide).toBe(2);
  });
  it("should start autoplay if hasAutoplay is true", () => {
    const spy = jest.spyOn(currentCarousel, "startAutoplay");
    currentCarousel.hasAutoplay = true;
    currentCarousel.startAutoplay();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(currentCarousel.autoplayIntervalId).not.toBeNull();
  });
  it("should not start autoplay if hasAutoplay is false", () => {
    const spy = jest.spyOn(currentCarousel, "startAutoplay");
    currentCarousel.hasAutoplay = false;
    currentCarousel.startAutoplay();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(currentCarousel.autoplayIntervalId).toBeNull();
  });
  it("should start autoplay and change the slides incrementally", () => {
    jest.useFakeTimers();

    currentCarousel.hasAutoplay = true;
    currentCarousel.currentSlide = 0;
    currentCarousel.startAutoplay();

    jest.advanceTimersByTime(3000);
    expect(currentCarousel.currentSlide).toBe(1);

    jest.advanceTimersByTime(3000);
    expect(currentCarousel.currentSlide).toBe(2);

    jest.advanceTimersByTime(3000);
    expect(currentCarousel.currentSlide).toBe(0);

    jest.useRealTimers();
  });
  it("should stop the autoplay if hasAutoplay is false", () => {
    const spy = jest.spyOn(currentCarousel, "stopAutoplay");
    currentCarousel.hasAutoplay = true;
    currentCarousel.startAutoplay();

    currentCarousel.stopAutoplay();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(currentCarousel.autoplayIntervalId).toBeNull();
  });
});
