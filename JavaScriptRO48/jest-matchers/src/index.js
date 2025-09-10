// String

function bankGreeting(userName) {
  const currentDate = new Date(
    new Date().toLocaleString(undefined, {
      hour12: false,
    })
  );

  if (currentDate.getHours() > 18) {
    return `Good evening, ${userName}`;
  } else if (currentDate.getDate() > 11) {
    return `Good afternoon, ${userName}`;
  } else {
    return `Good morning, ${userName}`;
  }
}

console.log(bankGreeting("Barosan"));

// Number

// Truthy / falsy

// Array

// Exceptions

// Common JS Export
module.exports = {
  bankGreeting,
};
