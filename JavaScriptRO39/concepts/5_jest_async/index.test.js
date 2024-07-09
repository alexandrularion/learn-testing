const { fetchUser } = require("./index");

describe("when testing the fetchUser function", () => {
  it("should return the user with id=1", () => {
    return fetchUser(true).then((user) => {
      expect.assertions(3);

      expect(user.id).toBe(1);
      expect(user.username).toBe("johndoe");
      expect(user.age).toBeGreaterThanOrEqual(50);
    });
  });

  it("should return error message if the user with id=1 not found", async () => {
    await expect(fetchUser(false)).rejects.toEqual({
      message: "User not found",
      status: 404,
    });
  });

  it("should return the user with id=1 using async/await syntax", async () => {
    const user = await fetchUser(true);

    expect.assertions(2);
    expect(user.id).toBe(1);
    expect(user).toEqual({
      id: 1,
      username: "johndoe",
      firstName: "Jhon",
      lastName: "Doe",
      age: 50,
      email: "john.doe@gmail.com",
    });
  });
});
