const getSession = (isAuthenticated) => {
  if (isAuthenticated) {
    return {
      id: 1,
      username: "johndoe",
      firstName: "Jhon",
      lastName: "Doe",
      age: 50,
      email: "john.doe@gmail.com",
    };
  }
  return null;
};

module.exports = {
  getSession,
};
