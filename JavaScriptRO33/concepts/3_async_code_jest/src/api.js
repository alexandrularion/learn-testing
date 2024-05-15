const latestUsers = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 24,
    interests: ["Football", "MMA Fights"],
    getFirstName: function () {
      return this.firstName;
    },
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    interests: ["Cooking Shows"],
    getFirstName: function () {
      return this.firstName;
    },
  },
];

/**
 * It does an API call to retrieve the latest 2 users
 * @returns  {Promise}
 */
const getTheLatestUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(latestUsers);
    }, 3000);
  });
};

module.exports = {
  getTheLatestUsers,
  latestUsers,
};
