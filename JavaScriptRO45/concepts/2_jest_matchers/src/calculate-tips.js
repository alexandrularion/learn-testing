/**
 * Calculate the tips based on a total and if is required to do it
 * @param {number}  total           any number bigger than 0
 * @param {boolean} isRequired      true to calculate and false for 0
 * @returns {object}                { tier1: 12.7, tier2: 20.0, tier3: 25.0 }
 */
const calculateTips = (total, isRequired) => {
  if (!isRequired) {
    return {
      tier1: 0,
      tier2: 0,
      tier3: 0,
    };
  }

  const tier1 = (5 / 100) * total;
  const tier2 = (10 / 100) * total;
  const tier3 = (20 / 100) * total;

  return {
    tier1: tier1,
    tier2: tier2,
    tier3: tier3,
  };
};

module.exports = {
  calculateTips,
};
