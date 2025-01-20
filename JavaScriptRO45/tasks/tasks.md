### **1. Test a Simple Function**
**Task**: Write a test for a function that multiplies two numbers.

**Tips**:
- Use `toBe` to check exact values.
- Write tests for a few different inputs.

**Starter Code**:
```javascript
// multiply.js
export const multiply = (a, b) => a * b;

// multiply.test.js
import { multiply } from "./multiply";

test("multiply two numbers", () => {
  // Your code here
});
```

---

### **2. Test an Array Filter**
**Task**: Write a test for a function that filters out numbers less than 10 from an array.

**Tips**:
- Test with an empty array.
- Test edge cases, e.g., numbers exactly equal to 10.

**Starter Code**:
```javascript
// filterNumbers.js
export const filterNumbers = (arr) => arr.filter((num) => num >= 10);

// filterNumbers.test.js
import { filterNumbers } from "./filterNumbers";

test("filters out numbers less than 10", () => {
  // Your code here
});
```

---

### **3. Mock a Callback**
**Task**: Test a function that accepts a callback and calls it with a value.

**Tips**:
- Use `jest.fn()` to mock the callback.
- Verify it was called with the correct argument.

**Starter Code**:
```javascript
// callbackFunction.js
export const processValue = (value, callback) => {
  callback(value * 2);
};

// callbackFunction.test.js
import { processValue } from "./callbackFunction";

test("calls the callback with processed value", () => {
  // Your code here
});
```

---

### **4. Mock a Module**
**Task**: Mock an external module and test your function's interaction with it.

**Tips**:
- Use `jest.mock()` to mock the module.
- Verify the mock was called correctly.

**Starter Code**:
```javascript
// api.js
export const fetchData = async () => {
  return "real data";
};

// fetchDataHandler.js
import { fetchData } from "./api";

export const getProcessedData = async () => {
  const data = await fetchData();
  return `Processed: ${data}`;
};

// fetchDataHandler.test.js
import { getProcessedData } from "./fetchDataHandler";
import { fetchData } from "./api";

jest.mock("./api");

test("mocks fetchData and processes the result", async () => {
  // Your code here
});
```

---

### **5. Test an Object Method**
**Task**: Write a test for an object method.

**Tips**:
- Mock the method and track its calls.
- Use `toHaveBeenCalledWith` to validate arguments.

**Starter Code**:
```javascript
// logger.js
export const logger = {
  log: (message) => console.log(message),
};

// logger.test.js
import { logger } from "./logger";

test("logger logs messages correctly", () => {
  // Your code here
});
```

---

### **6. Test Error Throwing**
**Task**: Test a function that throws an error for invalid input.

**Tips**:
- Use `toThrow` to verify the error message.
- Test valid and invalid inputs.

**Starter Code**:
```javascript
// divide.js
export const divide = (a, b) => {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
};

// divide.test.js
import { divide } from "./divide";

test("throws error when dividing by zero", () => {
  // Your code here
});
```

---

### **7. Test Asynchronous Code**
**Task**: Write a test for a function that resolves data after a delay.

**Tips**:
- Use `async/await` with `mockResolvedValue`.
- Test both success and failure cases.

**Starter Code**:
```javascript
// asyncFunction.js
export const fetchData = async () => {
  return new Promise((resolve) => setTimeout(() => resolve("data"), 100));
};

// asyncFunction.test.js
import { fetchData } from "./asyncFunction";

test("resolves data correctly", async () => {
  // Your code here
});
```

---

### **8. Test a Timer**
**Task**: Test a function that uses `setTimeout`.

**Tips**:
- Use `jest.useFakeTimers()` to control time in tests.
- Use `jest.runAllTimers()` to advance the timer instantly.

**Starter Code**:
```javascript
// timer.js
export const delayedAction = (callback) => {
  setTimeout(() => {
    callback("done");
  }, 1000);
};

// timer.test.js
import { delayedAction } from "./timer";

jest.useFakeTimers();

test("calls the callback after timeout", () => {
  // Your code here
});
```

---

### **9. Test a Conditional Logic**
**Task**: Write a test for a function that returns "even" or "odd" based on a number.

**Tips**:
- Test edge cases like 0 and negative numbers.
- Use descriptive test cases.

**Starter Code**:
```javascript
// evenOdd.js
export const evenOdd = (num) => (num % 2 === 0 ? "even" : "odd");

// evenOdd.test.js
import { evenOdd } from "./evenOdd";

test("returns 'even' for even numbers", () => {
  // Your code here
});
```

---

### **10. Snapshot Testing**
**Task**: Write a snapshot test for a function that generates a string.

**Tips**:
- Use `expect().toMatchSnapshot()` to save and compare snapshots.
- Update the snapshot if the output changes intentionally.

**Starter Code**:
```javascript
// formatter.js
export const formatMessage = (user, message) => `${user}: ${message}`;

// formatter.test.js
import { formatMessage } from "./formatter";

test("formats a message correctly", () => {
  // Your code here
});
```
