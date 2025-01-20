const carousel = {
  slides: [
    "/assets/carousel_1.png",
    "/assets/carousel_2.png",
    "/assets/carousel_3.png",
  ],
  currentSlide: 0,
  totalSlides: 3,
  hasAutoplay: false,
  autoplayInterval: 3000, // 3s
  autoplayIntervalId: null,

  nextSlide: function () {
    if (this.currentSlide === this.totalSlides - 1) {
      this.currentSlide = 0; // first slide
      return;
    }
    this.currentSlide = this.currentSlide + 1;
  },
  prevSlide: function () {
    if (this.currentSlide === 0) {
      this.currentSlide = this.totalSlides - 1; // last slide
      return;
    }
    this.currentSlide = this.currentSlide - 1;
  },
  startAutoplay: function () {
    if (!this.hasAutoplay) return;
    this.autoplayIntervalId = setInterval(
      this.nextSlide,
      this.autoplayInterval
    );
  },
  stopAutoplay: function () {
    clearInterval(this.autoplayIntervalId);
    this.autoplayIntervalId = null;
  },
};

module.exports = {
  carousel,
};
