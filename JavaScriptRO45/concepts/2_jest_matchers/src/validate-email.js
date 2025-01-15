const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail = (data) => {
  const errorMessage = "The email is not valid.";
  const successMessage = "The email is valid.";

  if (typeof data !== "string") {
    return errorMessage;
  }
  if (data.length === 0) {
    return errorMessage;
  }

  if (emailRegex.test(data)) {
    return successMessage;
  }
  return errorMessage;
};

module.exports = {
  validateEmail,
};
