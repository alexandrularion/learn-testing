async function fetchUsers() {
  try {
    const response = await fetch("https://myapi.website.com/users");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = fetchUsers;
