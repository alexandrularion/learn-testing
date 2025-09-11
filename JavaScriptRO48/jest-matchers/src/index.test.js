const { bankGreeting, withdrawMoney, getBankAccounts } = require("./index"); // Common JS Import

describe("when calling bankGreeting function", () => {
  // Inainte de fiecare test
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  // Testele noastre
  test("should return greeting if userName parameter was passed as string", () => {
    const mockData = new Date(0, 0, 0, 19, 30, 0);
    jest.spyOn(global, "Date").mockImplementation(() => mockData);

    const greeting = bankGreeting("Barosane");

    console.debug(greeting); // "Good evening, Barosane"

    expect(greeting).toBe("Good evening, Barosane");
  });

  test("should return morning greeting if hour is between 00:00 -> 10:59", () => {
    const mockData = new Date(0, 0, 0, 8, 0, 0);
    jest.spyOn(global, "Date").mockImplementation(() => mockData);

    const greeting = bankGreeting("John");

    console.debug(greeting); // "Good morning, John"

    expect(greeting).toBe("Good morning, John");
  });

  test("should return afternoon greeting if hour is between 11:00 -> 17:59", () => {
    const mockData = new Date(0, 0, 0, 14, 29, 0);
    jest.spyOn(global, "Date").mockImplementation(() => mockData);

    const greeting = bankGreeting("Ion");

    console.debug(greeting); // "Good afternoon, Ion"

    expect(greeting).toBe("Good afternoon, Ion");
  });

  test("should throw an error if userName parameter is missing", () => {
    expect(() => bankGreeting()).toThrow();
    expect(() => bankGreeting()).toThrow("userName parameter is missing");
  });
});

describe("when calling withdrawMoney function", () => {
  it("should throw an error when amount is set to 0", () => {
    expect.assertions(2); // ne asteptam sa avem 2 apeluri la functia expect
    expect(() => withdrawMoney(2000, 0)).toThrow();
    expect(() => withdrawMoney(2000, 0)).toThrow("Invalid withdraw amount");
  });
  it("should throw an error when balance is less than amount", () => {
    expect.assertions(2);
    expect(() => withdrawMoney(2000, 3000)).toThrow();
    expect(() => withdrawMoney(2000, 3000)).toThrow("Insufficient founds");
  });
  it("should withdraw and return new balance when having enough money", () => {
    expect.assertions(2);

    const result = withdrawMoney(10000, 2000);

    expect(result).toEqual(8000); // .toEqual() functioneaza la fel ca .toBe()
    expect(result).toBeLessThan(10000);
  });
});

describe("when calling getBankAccounts function", () => {
  const bankAccounts = getBankAccounts();

  it("all accounts should have id property set and truthy", () => {
    // exemplu: 2 * 4 (2 = nr de elemente, 4 = nr de assertions)
    expect.assertions(1 + bankAccounts.length * 4);
    expect(bankAccounts).toEqual(
      expect.arrayOf(
        expect.objectContaining({
          id: expect.any(Number),
        })
      )
    );
    for (const account of bankAccounts) {
      expect(account.id).toBeTruthy();
      expect(account.id).toBeDefined();
      expect(account.id).toBeGreaterThan(0);
      expect(account.id).toBeLessThan(1000000);
    }
  });

  it("should be at least one new account", () => {
    let count = 0;

    for (const account of bankAccounts) {
      if (account.newAccount) {
        count = count + 1;
      }
    }

    expect.assertions(2);
    expect(count).toBeTruthy();
    expect(count).toBeGreaterThan(0);
  });

  it("for each account the balance should be equal or greater than 0", () => {
    expect.assertions(bankAccounts.length * 2);
    for (const account of bankAccounts) {
      expect(account.balance).not.toBeUndefined();
      expect(account.balance).toBeGreaterThanOrEqual(0);
    }
  });
});
