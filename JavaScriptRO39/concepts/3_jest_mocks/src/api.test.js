const Api = require("./api");
const utils = require("./utils");

jest.mock("./utils");

describe("when testing api endpoints", () => {
  it("should call the fetch function using the formated url", async () => {
    const finalUrl =
      "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=e53a147cdedbd3a04ab2eeaee1705971";
    const url =
      "https://api.openweathermap.org/data/3.0/onecall?lat={text}&lon={text}&appid={text}";
    const apiKey = "e53a147cdedbd3a04ab2eeaee1705971";

    utils.getLabel.mockReturnValue(finalUrl);

    await Api.getWeatherByLatAndLon(33.44, -94.04);

    expect(utils.getLabel).toHaveBeenCalledTimes(1);
    expect(utils.getLabel).toHaveBeenCalledWith(url, [33.44, -94.04, apiKey]);
  });
});
