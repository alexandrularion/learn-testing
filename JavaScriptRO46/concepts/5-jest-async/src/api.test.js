const fetchUsers = require("./api");

afterEach(function () {
  global.fetch = null;
  jest.restoreAllMocks();
});

it("fetchUsers should return a list of users", async function () {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            name: "John",
          },
          { name: "Jane" },
        ]),
    })
  );

  const data = await fetchUsers();

  expect(data).toEqual([{ name: "John" }, { name: "Jane" }]);
  expect(data).toHaveLength(2);
  expect(data[0]).toEqual({ name: "John" });
});

it("fetchUsers should throw an error", async function () {
  global.fetch = jest.fn(() => Promise.reject(new Error("Cannot fetch data.")));

  await expect(fetchUsers()).rejects.toThrow("Cannot fetch data.");
});
