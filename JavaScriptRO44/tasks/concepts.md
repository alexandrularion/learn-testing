#### **Task 1: Setting Up Jest in a JavaScript Project**

**Theory**: Jest is a testing framework developed by Meta for unit testing JavaScript/TypeScript apps. It comes with zero config for most cases.

**Description**: Initialize a Node.js project and install Jest. Configure it in `package.json` or via `jest.config.js`.

**Tips**:

* Use `npm init -y` to create `package.json`.
* Add `"test": "jest"` to your scripts.
* Create a `__tests__` folder or use `.test.js` files.

**Starter Code**:

```bash
npm init -y
npm install --save-dev jest
```

```json
// package.json
{
  "scripts": {
    "test": "jest"
  }
}
```

```js
// math.js
function add(a, b) {
  return a + b;
}
module.exports = { add };

// math.test.js
const { add } = require('./math');
test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});
```

📁 Files:

* `math.js`
* `math.test.js`

---

#### **Task 2: Understanding Basic Matchers**

**Theory**: Jest matchers (`toBe`, `toEqual`, `toBeTruthy`, etc.) are assertions to compare expected and actual results.

**Description**: Write tests using different matchers.

**Tips**:

* Use `toBe` for primitives.
* Use `toEqual` for objects or arrays.
* Use `toBeTruthy` or `toBeFalsy` for boolean logic.

**Starter Code**:

```js
// logic.js
const isEven = (num) => num % 2 === 0;
const getUser = () => ({ name: 'John', age: 25 });
module.exports = { isEven, getUser };

// logic.test.js
const { isEven, getUser } = require('./logic');

test('checks even number', () => {
  expect(isEven(4)).toBe(true);
  expect(isEven(5)).toBeFalsy();
});

test('returns a user object', () => {
  expect(getUser()).toEqual({ name: 'John', age: 25 });
});
```

📁 Files:

* `logic.js`
* `logic.test.js`

---

#### **Task 3: Testing Functions with Multiple Inputs**

**Theory**: Parameterized tests let you run the same test for different values.

**Description**: Use `test.each()` to run the same logic across multiple inputs.

**Tips**:

* Use arrays of test cases with `test.each`.
* Helpful for validation logic.

**Starter Code**:

```js
// validate.js
function isValidAge(age) {
  return age >= 18 && age <= 100;
}
module.exports = { isValidAge };

// validate.test.js
const { isValidAge } = require('./validate');

test.each([
  [17, false],
  [25, true],
  [101, false],
])('isValidAge(%i) should return %s', (input, expected) => {
  expect(isValidAge(input)).toBe(expected);
});
```

📁 Files:

* `validate.js`
* `validate.test.js`

---

#### **Task 4: Testing Arrays and Objects**

**Theory**: Arrays and objects should be compared using `.toEqual()`.

**Description**: Test utility functions that work on arrays or objects.

**Tips**:

* `.toContain` checks if an item is in an array.
* `.toHaveProperty` checks if a property exists.

**Starter Code**:

```js
// utils.js
const getUserNames = (users) => users.map((u) => u.name);
module.exports = { getUserNames };

// utils.test.js
const { getUserNames } = require('./utils');

test('extracts user names', () => {
  const input = [{ name: 'Ana' }, { name: 'Bob' }];
  expect(getUserNames(input)).toEqual(['Ana', 'Bob']);
  expect(getUserNames(input)).toContain('Ana');
});
```

📁 Files:

* `utils.js`
* `utils.test.js`

---

#### **Task 5: Grouping Tests with describe()**

**Theory**: Use `describe()` to group related tests.

**Description**: Group math functions inside a `describe` block.

**Tips**:

* Improves readability.
* Can nest multiple levels.

**Starter Code**:

```js
// calc.js
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
module.exports = { add, subtract };

// calc.test.js
const { add, subtract } = require('./calc');

describe('Math operations', () => {
  test('adds 5 + 5', () => {
    expect(add(5, 5)).toBe(10);
  });

  test('subtracts 10 - 3', () => {
    expect(subtract(10, 3)).toBe(7);
  });
});
```

📁 Files:

* `calc.js`
* `calc.test.js`

Here is the continuation from **Task 6 to Task 20** for learning the **Jest testing framework**, progressing from intermediate to advanced concepts:

#### **Task 6: Mocking Functions with jest.fn()**

**Theory**: `jest.fn()` creates mock functions to test how functions are called and what values they return.

**Description**: Test a function that uses a callback by mocking the callback.

**Tips**:

* Use `.toHaveBeenCalled()`, `.toHaveBeenCalledTimes()`, `.toHaveBeenCalledWith(...)`.
* Good for testing dependencies.

**Starter Code**:

```js
// calculator.js
function calculate(a, b, callback) {
  return callback(a, b);
}
module.exports = { calculate };

// calculator.test.js
const { calculate } = require('./calculator');

test('calls the callback with correct arguments', () => {
  const mockCallback = jest.fn((x, y) => x + y);
  const result = calculate(3, 4, mockCallback);

  expect(mockCallback).toHaveBeenCalledWith(3, 4);
  expect(mockCallback).toHaveBeenCalledTimes(1);
  expect(result).toBe(7);
});
```

📁 Files:

* `calculator.js`
* `calculator.test.js`

---

#### **Task 7: Mocking External Modules**

**Theory**: You can mock imported modules using `jest.mock()`.

**Description**: Test a module that depends on another module by mocking it.

**Tips**:

* Use `jest.mock('./moduleName')`.
* Replace implementation with `mockImplementation`.

**Starter Code**:

```js
// fetcher.js
const api = require('./api');
async function getData() {
  const data = await api.fetchData();
  return data.title;
}
module.exports = { getData };

// api.js
async function fetchData() {
  return { title: 'Real data' };
}
module.exports = { fetchData };

// fetcher.test.js
jest.mock('./api');

const { getData } = require('./fetcher');
const api = require('./api');

test('mocks API response', async () => {
  api.fetchData.mockResolvedValue({ title: 'Mocked data' });
  const result = await getData();
  expect(result).toBe('Mocked data');
});
```

📁 Files:

* `fetcher.js`
* `api.js`
* `fetcher.test.js`

---

#### **Task 8: Testing Asynchronous Code**

**Theory**: Use `async/await` or `done` for async tests.

**Description**: Test a function that returns a promise.

**Tips**:

* Use `await` with `async` tests.
* Don’t forget to `return` the promise or use `await`.

**Starter Code**:

```js
// delay.js
function delay(ms) {
  return new Promise((resolve) => setTimeout(() => resolve('done'), ms));
}
module.exports = { delay };

// delay.test.js
const { delay } = require('./delay');

test('resolves after delay', async () => {
  const result = await delay(100);
  expect(result).toBe('done');
});
```

📁 Files:

* `delay.js`
* `delay.test.js`

---

#### **Task 9: Using beforeEach and afterEach**

**Theory**: These hooks run before/after every test. Use them to reset state.

**Description**: Track function call counts across tests.

**Tips**:

* Use `jest.clearAllMocks()` in `beforeEach`.
* Helpful when using mocks across tests.

**Starter Code**:

```js
// tracker.js
function logger(message) {
  console.log(message);
}
module.exports = { logger };

// tracker.test.js
const { logger } = require('./tracker');
jest.spyOn(console, 'log');

beforeEach(() => {
  jest.clearAllMocks();
});

test('logs message 1', () => {
  logger('Hello');
  expect(console.log).toHaveBeenCalledWith('Hello');
});

test('logs message 2', () => {
  logger('World');
  expect(console.log).toHaveBeenCalledWith('World');
});
```

📁 Files:

* `tracker.js`
* `tracker.test.js`

---

#### **Task 10: Testing Classes and OOP**

**Theory**: You can test class methods just like regular functions.

**Description**: Test a class with properties and methods.

**Tips**:

* Instantiate class in each test.
* Use `.toBeInstanceOf()` to check types.

**Starter Code**:

```js
// bank.js
class BankAccount {
  constructor(initialBalance = 0) {
    this.balance = initialBalance;
  }
  deposit(amount) {
    this.balance += amount;
  }
  getBalance() {
    return this.balance;
  }
}
module.exports = BankAccount;

// bank.test.js
const BankAccount = require('./bank');

test('should deposit correctly', () => {
  const acc = new BankAccount(100);
  acc.deposit(50);
  expect(acc.getBalance()).toBe(150);
});
```

📁 Files:

* `bank.js`
* `bank.test.js`

---

### 🧪 Advanced Level

---

#### **Task 11: Spying with jest.spyOn**

**Theory**: Spies monitor how real functions are used.

**Description**: Use `jest.spyOn()` to track function calls without mocking the implementation.

**Tips**:

* Good for functions with side effects.
* Restore using `.mockRestore()`.

**Starter Code**:

```js
// logger.js
function save(data) {
  console.log('Saving:', data);
}
module.exports = { save };

// logger.test.js
const { save } = require('./logger');

test('spies on console.log', () => {
  const spy = jest.spyOn(console, 'log');
  save('Test');
  expect(spy).toHaveBeenCalledWith('Saving:', 'Test');
  spy.mockRestore();
});
```

📁 Files:

* `logger.js`
* `logger.test.js`

---

#### **Task 12: Testing Error Cases**

**Theory**: Use `.toThrow()` or `.rejects.toThrow()` to test errors.

**Description**: Write tests for a function that may throw.

**Tips**:

* Use a callback inside `expect()` when testing `.toThrow()`.

**Starter Code**:

```js
// error.js
function risky(num) {
  if (num < 0) throw new Error('Invalid number');
  return num;
}
module.exports = { risky };

// error.test.js
const { risky } = require('./error');

test('throws on negative number', () => {
  expect(() => risky(-1)).toThrow('Invalid number');
});

test('returns positive number', () => {
  expect(risky(3)).toBe(3);
});
```

📁 Files:

* `error.js`
* `error.test.js`

---

#### **Task 13: Snapshot Testing (UI Components)**

**Theory**: Snapshots store the output of a component to ensure it doesn’t unexpectedly change.

**Description**: Use `toMatchSnapshot()` to capture function return.

**Tips**:

* Use for UI, JSON responses, or large objects.

**Starter Code**:

```js
// generate.js
function generateUser() {
  return { id: 1, name: 'Alice', role: 'admin' };
}
module.exports = { generateUser };

// generate.test.js
const { generateUser } = require('./generate');

test('matches snapshot', () => {
  expect(generateUser()).toMatchSnapshot();
});
```

📁 Files:

* `generate.js`
* `generate.test.js`

---

#### **Task 14: Testing Timers with Fake Time**

**Theory**: Use `jest.useFakeTimers()` to test time-based code.

**Description**: Simulate time passing with `jest.advanceTimersByTime()`.

**Tips**:

* Useful for `setTimeout`, `setInterval`, debounce.

**Starter Code**:

```js
// timeout.js
function doLater(cb) {
  setTimeout(() => cb('done'), 1000);
}
module.exports = { doLater };

// timeout.test.js
jest.useFakeTimers();
const { doLater } = require('./timeout');

test('waits 1 second', () => {
  const cb = jest.fn();
  doLater(cb);
  jest.advanceTimersByTime(1000);
  expect(cb).toHaveBeenCalledWith('done');
});
```

📁 Files:

* `timeout.js`
* `timeout.test.js`

---

#### **Task 15: Code Coverage**

**Theory**: Jest can report how much of your code is tested.

**Description**: Generate code coverage report.

**Tips**:

* Run with `jest --coverage`.
* Look for uncovered branches/functions.

**Starter Code**:

```js
// greet.js
function greet(name) {
  if (!name) return 'Hello, stranger';
  return `Hello, ${name}`;
}
module.exports = { greet };
```

No test needed here — just run:

```bash
npx jest --coverage
```

📁 Files:

* `greet.js`
* `greet.test.js` (optional)