const carousel = {
  slides: [
    "/assets/carousel/slide-1.png",
    "/assets/carousel/slide-2.png",
    "/assets/carousel/slide-3.png",
  ],
  currentSlideIndex: 0,
  currentSlidePath: "",

  init: function () {
    this.currentSlidePath = this.slides[this.currentSlideIndex]; // "/assets/carousel/slide-1.png"
  },
  nextSlide: function () {
    if (this.currentSlideIndex === this.slides.length - 1) {
      this.currentSlideIndex = 0;
    } else {
      this.currentSlideIndex = this.currentSlideIndex + 1;
    }
    this.currentSlidePath = this.slides[this.currentSlideIndex];
  },
  prevSlide: function () {
    if (this.currentSlideIndex === 0) {
      this.currentSlideIndex = this.slides.length - 1;
    } else {
      this.currentSlideIndex = this.currentSlideIndex - 1;
    }
    this.currentSlidePath = this.slides[this.currentSlideIndex];
  },
};

module.exports = carousel;
