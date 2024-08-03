const generateGreeting = (user) => {
  if (!user) {
    return "Hello, guest! Welcome back.";
  }
  const { name } = user;
  return `Hello, ${name.first} ${name.last}! Welcome back.`;
};

module.exports = generateGreeting;
