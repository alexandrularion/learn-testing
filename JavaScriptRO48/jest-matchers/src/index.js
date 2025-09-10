// String

function bankGreeting(userName) {
  if (!userName) {
    throw Error("userName parameter is missing");
  }

  const currentDate = new Date(
    new Date().toLocaleString(undefined, {
      hour12: false,
    })
  );

  if (currentDate.getHours() >= 18) {
    return `Good evening, ${userName}`;
  } else if (currentDate.getHours() >= 11) {
    return `Good afternoon, ${userName}`;
  } else {
    return `Good morning, ${userName}`;
  }
}

// Number

// Truthy / falsy

// Array

// Exceptions

// Common JS Export
module.exports = {
  bankGreeting,
};
