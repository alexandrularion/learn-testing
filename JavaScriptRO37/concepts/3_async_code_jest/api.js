const fetchUser = (isFound = false) => {
  return new Promise((resolve, reject) => {
    // all the code that is executed here
    // will be a part of the promise
    const user = {
      id: 1,
      username: "johndoe",
      firstName: "Jhon",
      lastName: "Doe",
      age: 50,
      email: "john.doe@gmail.com",
    };

    const error = {
      message: "User not found",
      status: 404,
    };

    if (isFound) {
      resolve(user);
    } else {
      reject(error);
    }
  });
};

module.exports = {
  fetchUser,
};
