### 🔹 Task 1: Test a Sum Function with `toBe`  
**Function:**
```js
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

**Test:**
```js
const sum = require('./sum');

test('adds 3 + 4 to equal 7', () => {
  // Write the correct matcher here
});
```

🧠 *Tip:* Use `toBe` for primitive values like numbers.

---

### 🔹 Task 2: Test Object Equality with `toEqual`  
**Function:**
```js
function getUser() {
  return { name: 'Alice', age: 25 };
}
module.exports = getUser;
```

**Test:**
```js
const getUser = require('./getUser');

test('returns correct user object', () => {
  // Write the correct matcher here
});
```

🧠 *Tip:* Use `toEqual` for comparing objects or arrays.

---

### 🔹 Task 3: Check for Truthy Value  
**Function:**
```js
function isAvailable() {
  return true;
}
module.exports = isAvailable;
```

**Test:**
```js
const isAvailable = require('./isAvailable');

test('returns a truthy value', () => {
  // Write the correct matcher here
});
```

🧠 *Tip:* Use `toBeTruthy` when checking if a value is true-like.

---

### 🔹 Task 4: Check for Falsy Value  
**Function:**
```js
function getPrice() {
  return 0;
}
module.exports = getPrice;
```

**Test:**
```js
const getPrice = require('./getPrice');

test('returns a falsy value', () => {
  // Write the correct matcher here
});
```

🧠 *Tip:* Use `toBeFalsy` for values like `false`, `0`, `null`, `undefined`.

---

### 🔹 Task 5: Check if Array Contains an Item  
**Function:**
```js
function getFruits() {
  return ['apple', 'banana', 'cherry'];
}
module.exports = getFruits;
```

**Test:**
```js
const getFruits = require('./getFruits');

test('contains banana in the list', () => {
  // Write the correct matcher here
});
```

🧠 *Tip:* Use `toContain` to check if an array includes a value.