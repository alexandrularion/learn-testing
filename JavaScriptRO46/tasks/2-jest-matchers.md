### 🔹 Task 1: Test a Sum Function with `toBe`  
**Function:**
```js
export function sum(a, b) {
  return a + b;
}
```

**Test:**
```js
import { sum } from './sum';

test('adds 3 + 4 to equal 7', () => {
  // Write the correct matcher here
});
```

🧠 *Tip:* Use `toBe` for primitive values like numbers.

---

### 🔹 Task 2: Test Object Equality with `toEqual`  
**Function:**
```js
export function getUser() {
  return { name: 'Alice', age: 25 };
}
```

**Test:**
```js
import { getUser } from './getUser';

test('returns correct user object', () => {
  // Write the correct matcher here
});
```

🧠 *Tip:* Use `toEqual` for comparing objects or arrays.

---

### 🔹 Task 3: Check for Truthy Value  
**Function:**
```js
export function isAvailable() {
  return true;
}
```

**Test:**
```js
import { isAvailable } from './isAvailable';

test('returns a truthy value', () => {
  // Write the correct matcher here
});
```

🧠 *Tip:* Use `toBeTruthy` when checking if a value is true-like.

---

### 🔹 Task 4: Check for Falsy Value  
**Function:**
```js
export function getPrice() {
  return 0;
}
```

**Test:**
```js
import { getPrice } from './getPrice';

test('returns a falsy value', () => {
  // Write the correct matcher here
});
```

🧠 *Tip:* Use `toBeFalsy` for values like `false`, `0`, `null`, `undefined`.

---

### 🔹 Task 5: Check if Array Contains an Item  
**Function:**
```js
export function getFruits() {
  return ['apple', 'banana', 'cherry'];
}
```

**Test:**
```js
import { getFruits } from './getFruits';

test('contains banana in the list', () => {
  // Write the correct matcher here
});
```

🧠 *Tip:* Use `toContain` to check if an array includes a value.