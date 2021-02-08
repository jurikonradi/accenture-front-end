class Provider {
  /**
   * Gets the weather for a given city
   */
  static getWeather(city) {
    return Promise.resolve(`The weather of ${city} is Cloudy`);
  }
  /**
   * Gets the weather for a given city
   */
  static getLocalCurrency(city) {
    return Promise.resolve(`The local currency of ${city} is GBP`);
  }
  /**
   * Given Longtitude and latitude, this function returns a city
   */
  static findCity(long, lat) {
    return Promise.resolve(`London`);
  }
}

// Question 1:
// Print the city for lat/long 51.5074 and 0.1278
// Question 2:
// Print the weather for a given long / lan

let latitude = 0.1278,
  longtitude = 51.5074;
Provider.findCity(longtitude, latitude)
  .then(function (results) {
    console.log(
      `1:`,
      `City of longtitude and latitude ${longtitude}/${latitude} is
      ${results}`
    );
    return results; // becomes argument (city) of next .then
  })
  .then(function (city) {
    Provider.getWeather(city).then(function (results) {
      console.log(`2:`, results);
    });
  });

// Question 3:
// Print the weather and currency for a given city (London)

Provider.getWeather("London").then(function (results) {
  console.log(`3:`, results);
});
Provider.getLocalCurrency("London").then(function (results) {
  console.log(`4:`, results);
});
