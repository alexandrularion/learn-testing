const { fetchUser } = require("./api");

describe("when calling fetchUser promise function", () => {
  it("should return the user with id=1", () => {
    return fetchUser(true).then((data) => {
      expect.assertions(3);
      expect(data.id).toBe(1);
      expect(data.username).toBe("johndoe");
      expect(data.age).toBeGreaterThanOrEqual(50);
    });
  });

  it("should return error message if user with id=1 not found", async () => {
    await expect(fetchUser(false)).rejects.toEqual({
      message: "User not found",
      status: 404,
    });
  });

  it("should return the user with id=1 using async/await", async () => {
    const data = await fetchUser(true);

    expect.assertions(2);
    expect(data.id).toBe(1);
    expect(data).toEqual({
      id: 1,
      username: "johndoe",
      firstName: "Jhon",
      lastName: "Doe",
      age: 50,
      email: "john.doe@gmail.com",
    });
  });
});
