const createUserProfile = (id, firstName, lastName, email) => {
  return {
    id,
    name: {
      first: firstName,
      last: lastName,
    },
    contact: {
      email,
    },
    createdAt: "03/08/2024",
  };
};

module.exports = createUserProfile;
