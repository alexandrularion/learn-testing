const { getSession } = require("./session");

/**
    toBeNull matches only null
    toBeUndefined matches only undefined
    toBeDefined is the opposite of toBeUndefined
    toBeTruthy matches anything that an if statement treats as true
    toBeFalsy matches anything that an if statement treats as false
 */
describe("when calling the getSession function", () => {
  it("should return null if user is not authenticated", () => {
    expect.assertions(5);
    const session = getSession(false); // null
    expect(session).toBeNull();
    expect(session).toBeFalsy();
    expect(session).toBeDefined();
    expect(session).not.toBeUndefined();
    expect(session).not.toBeTruthy();
  });
  it("should return object with data if user is authenticated", () => {
    expect.assertions(5);
    const session = getSession(true); // { id: 1, username: "johndoe", firstName: "Jhon", lastName: "Doe", age: 50, email: "john.doe@gmail.com", };
    expect(session).not.toBeNull();
    expect(session).not.toBeFalsy();
    expect(session).toBeDefined();
    expect(session).not.toBeUndefined();
    expect(session).toBeTruthy();
  });
});
