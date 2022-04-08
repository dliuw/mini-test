const axios = require("axios");
const moment = require("moment");

function getRamalan() {
  return axios
    .get(
      "https://api.openweathermap.org/data/2.5/onecall?lat=-6.20&lon=106.817&exclude=hourly,minutely,alert&units=metric&appid=32901aae06dce79ce2a1aef18242edc5"
    )
    .then((response) => {
      if (response.data) return Promise.resolve(response.data);
      return Promise.reject(`Something went wrong`);
    });
}

getRamalan().then((response) => {
  console.log(`Weather Forecast:`);
  for (const daily of response.daily) {
    console.log(
      moment.unix(daily.dt).format(`ddd, D MMM YYYY: ${daily.temp.day}°C`)
    );
  }
});
