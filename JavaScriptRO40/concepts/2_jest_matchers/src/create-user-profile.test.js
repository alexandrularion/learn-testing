const createUserProfile = require("./create-user-profile");

test("should create an user object if arguments are valid", () => {
  const user = {
    id: 10,
    name: {
      first: "John",
      last: "Doe",
    },
    contact: {
      email: "john.doe@gmail.com",
    },
    createdAt: "03/08/2024",
  };

  const newUserProfile = createUserProfile(
    10,
    "John",
    "Doe",
    "john.doe@gmail.com"
  );

  expect(newUserProfile).toEqual(user);
  expect(newUserProfile.id).toBe(user.id);
  expect(newUserProfile.name).toEqual(user.name);
  expect(newUserProfile.createdAt).toMatch(/03\/08\/2024/);
});
