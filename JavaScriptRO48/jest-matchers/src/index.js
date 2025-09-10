// String, Exceptions

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

// Number, Exceptions
const withdrawMoney = (balance, amount) => {
  if (amount === 0) {
    throw new Error("Invalid withdraw amount");
  }
  if (balance < amount) {
    throw new Error("Insufficient founds");
  }

  const newBalance = balance - amount;

  return newBalance;
};

// Truthy / falsy

// Array

// Common JS Export
module.exports = {
  bankGreeting,
  withdrawMoney,
};
