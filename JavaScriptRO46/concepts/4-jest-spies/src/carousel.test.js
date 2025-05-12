const carousel = require("./carousel");

let _carousel = { ...carousel };

beforeEach(function () {
  _carousel = { ...carousel };
});

describe("when testing carousel functionality", function () {
  it("should set current slide path to the first path within slides", function () {
    const spy = jest.spyOn(_carousel, "init");

    expect(_carousel.currentSlideIndex).toBe(0);
    expect(_carousel.currentSlidePath).toBe("");

    _carousel.init();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(_carousel.currentSlidePath).toBe("/assets/carousel/slide-1.png");
    expect(_carousel.currentSlideIndex).toBe(0);
  });
  it("should go to the next slide", function () {
    const spy = jest.spyOn(_carousel, "nextSlide");

    _carousel.nextSlide();

    expect(_carousel.currentSlideIndex).toBe(1);
    expect(_carousel.currentSlidePath).toBe("/assets/carousel/slide-2.png");

    _carousel.nextSlide();

    expect(spy).toHaveBeenCalledTimes(2);
    expect(_carousel.currentSlideIndex).toBe(2);
    expect(_carousel.currentSlidePath).toBe("/assets/carousel/slide-3.png");
  });
  it("should go to the previous slide", function () {
    const spy = jest.spyOn(_carousel, "prevSlide");

    _carousel.nextSlide(); // Slide index = 1
    _carousel.prevSlide(); // Slide index = 0

    expect(spy).toHaveBeenCalledTimes(1);
    expect(_carousel.currentSlideIndex).toBe(0);
    expect(_carousel.currentSlidePath).toBe("/assets/carousel/slide-1.png");
  });
  it("should go to the last slide when current slide index is the first", function () {
    const spy = jest.spyOn(_carousel, "prevSlide");

    _carousel.prevSlide(); // Slide index = 2

    expect(spy).toHaveBeenCalledTimes(1);
    expect(_carousel.currentSlideIndex).toBe(2);
    expect(_carousel.currentSlidePath).toBe("/assets/carousel/slide-3.png");
  });
  it("should go to the first slide when current slide index is the last", function () {
    const spy = jest.spyOn(_carousel, "nextSlide");

    _carousel.nextSlide(); // Slide index = 1
    _carousel.nextSlide(); // Slide index = 2
    _carousel.nextSlide(); // Slide index = 0

    expect(spy).toHaveBeenCalledTimes(3);
    expect(_carousel.currentSlideIndex).toBe(0);
    expect(_carousel.currentSlidePath).toBe("/assets/carousel/slide-1.png");
  });
});
