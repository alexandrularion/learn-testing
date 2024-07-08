// API = Application Programming Interface
// Backend ~ RESTful API ~ Server
const utils = require("./utils");

const Api = {
  getWeatherByLatAndLon: async (lat, lon) => {
    const apiKey = "e53a147cdedbd3a04ab2eeaee1705971";
    // instead of using string interpolation, we use the getLabel util that format our url string
    // fetch(
    //   `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`
    // );
    const endpointUrl =
      "https://api.openweathermap.org/data/3.0/onecall?lat={text}&lon={text}&appid={text}";
    const formatedEndpointUrl = utils.getLabel(endpointUrl, [lat, lon, apiKey]);
    const response = await fetch(formatedEndpointUrl);
    const body = response.json();
    return body;
  },
};

module.exports = Api;
