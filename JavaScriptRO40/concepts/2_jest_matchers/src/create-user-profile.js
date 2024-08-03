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
    createdAt: new Date(),
  };
};

module.exports = createUserProfile;
