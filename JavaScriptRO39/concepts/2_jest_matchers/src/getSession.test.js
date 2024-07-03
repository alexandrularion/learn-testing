const getSession = require("./getSession");

/**
 * MATCHERS: Truthiness
 *  - toBeNull matches only null
 *  - toBeUndefined matches only undefined
 *  - toBeDefined is the opposite of toBeUndefined
 *  - toBeTruthy matches anything that an if statement treats as true
 *  - toBeFalsy matches anything that an if statement treats as false
 * VISIT: https://jestjs.io/docs/using-matchers#truthiness
 */
describe("when testing the getSession functionality", () => {
  it("should return null if the user is not authenticated", () => {
    const session = getSession(false);

    expect.assertions(4);
    expect(session).toBeNull();
    expect(session).toBeFalsy();
    expect(session).not.toBeTruthy();
    expect(session).not.toBeUndefined();
  });
  it("should return an object if the user is authenticated", () => {
    const session = getSession(true);

    expect.assertions(4);
    expect(session).toBeTruthy();
    expect(session).not.toBeNull();
    expect(session).toBeDefined();
    expect(session).not.toBeFalsy();
  });
});
