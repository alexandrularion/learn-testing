/**
 * Returns the user session if it is authenticated
 * @param {boolean} isAuth  i.e. true / false
 * @returns {null | Object} i.e. null or { id: 1....}
 */
const getSession = (isAuth) => {
  if (isAuth) {
    return {
      id: 1,
      username: "ion.popescu",
      firstName: "Ion",
      lastName: "Popescu",
      email: "ion.popescu@gmail.com",
    };
  }
  return null;
};

module.exports = getSession;
