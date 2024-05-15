const api = require("./api");

describe("when testing API functionality", () => {
  // it("should get the latest 2 users", () => {
  //   api.getTheLatestUsers().then((users) => {
  //     expect.assertions(2);
  //     expect(Array.isArray(users)).toBe(true);
  //   });
  // });

  it("should get the latest 2 users", async () => {
    const users = await api.getTheLatestUsers();
    expect.assertions(8);
    expect(Array.isArray(users)).toBe(true);
    expect(users[0]).toEqual(api.latestUsers[0]);
    expect(users).toEqual(api.latestUsers);
    expect(users).toHaveLength(api.latestUsers.length);
    expect(users[0]).toHaveProperty("firstName");
    expect(users[0]).not.toHaveProperty("gender");
    expect(users[0]).toHaveProperty("getFirstName");
    expect(users[0].getFirstName()).toBe("John");
  });
});
