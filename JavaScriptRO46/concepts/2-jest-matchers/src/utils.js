const utils = {
  calculateCartTotalPrice: function (items = []) {
    // item = { price: 24.3, quantity: 2 }
    if (items.length === 0) {
      return 0;
    }
    if (items.length === 1) {
      return parseFloat(items[0].price) * items[0].quantity;
    }

    let totalPrice = 0;
    for (let i = 0; i < items.length; i++) {
      totalPrice = totalPrice + parseFloat(items[i].price) * items[i].quantity;
    }

    return totalPrice;
  },
  capitalizeText: function (text) {
    if (typeof text !== "string") {
      throw new Error("Just go and learn some JS :( ");
    }
    if (text.length === 0) {
      return "";
    }

    const words = text.split(" ");

    const newWords = words.map((word) => {
      return word.slice(0, 1).toUpperCase() + word.slice(1);
    });

    const newText = newWords.join(" ");

    return newText;
  },
};

module.exports = utils;
