const Api = {
  getWeatherByCoordonates: async (lat, lon) => {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`
    );
    const body = await response.json();

    const latitude = body.latitude;
    const longitude = body.longitude;
    const unitMeasurement = body.hourly_units?.temperature_2m;
    const temperature = body.hourly?.temperature_2m[0];

    return {
      latitude,
      longitude,
      unitMeasurement,
      temperature,
    };
  },
};

module.exports = Api;
