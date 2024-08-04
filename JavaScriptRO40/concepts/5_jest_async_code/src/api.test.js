const Api = require("./api");

describe("when testing Api endpoints", () => {
  test("should call the fetch weather and return the data for specific lat and long", async () => {
    const result = await Api.getWeatherByCoordonates(47.647001, 26.2522599);

    expect(result.unitMeasurement).toBe("°C");
    expect(result.temperature).toBeGreaterThan(-30);
    expect(result.temperature).toBeLessThan(50);
    expect(Math.round(result.latitude)).toBe(48);
    expect(Math.round(result.longitude)).toBe(26);
  });

  test("should call the fetch weather and return the data for specific lat and long (then,catch,fianlly)", () => {
    return Api.getWeatherByCoordonates(47.647001, 26.2522599)
      .then((result) => {
        expect(result.unitMeasurement).toBe("°C");
        expect(result.temperature).toBeGreaterThan(-30);
        expect(Math.round(result.latitude)).toBe(48);
      })
      .catch((error) => {
        // we can test here
      })
      .fianlly(() => {
        // we can test here
        // always executed
      });
  });
});
