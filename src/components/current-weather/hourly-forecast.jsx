import "./hourly-forecast.css"

const HourlyForecast = ({data}) => {
    for (let i = 0; i <= 4; i++) {
      const currentTimeStamp = data.current.dt
      const sunriseTimeStamp = data.current.sunrise
      const sunsetTimeStamp = data.current.sunset
      const hourlyTimeStamp = data.hourly[i].dt
      const hourlyDate = new Date(hourlyTimeStamp * 1000)
      const hourlyTimeString = hourlyDate.toLocaleString()
      
      let dataHourlyMain = data.hourly[i].weather[0].main
      let dataHourlyDescription = data.hourly[i].weather[0].description
      let pictureSource
      let AtmosphereWeather = [
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Dust",
        "Ash",
        "Squall",
      ]
      
      if (
        parseInt(currentTimeStamp) >= parseInt(sunriseTimeStamp) &&
        parseInt(currentTimeStamp) < parseInt(sunsetTimeStamp)
      ) {
        if (dataHourlyMain === "Clear") {
          pictureSource =
            "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134909/maweatherapp/icon-clear-sky-day_yrsvbs.png"
          forecastWeatherHour[i].title = dataHourlyDescription
        } else if (dataHourlyMain === "Clouds") {
          if (dataHourlyDescription === "scattered clouds") {
            pictureSource =
              "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134910/maweatherapp/icon-scattered-clouds-day_psh3zf.png"
            forecastWeatherHour[i].title = dataHourlyDescription
          } else if (dataHourlyDescription === "few clouds") {
            pictureSource =
              "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134909/maweatherapp/icon-few-clouds-day_gw7apg.png"
            forecastWeatherHour[i].title = dataHourlyDescription
          } else if (dataHourlyDescription === "broken clouds") {
            pictureSource =
              "https://res.cloudinary.com/dewznnjqr/image/upload/v1681207506/maweatherapp/icon-broken-clouds-day_x3xuy8.png"
            forecastWeatherHour[i].title = dataHourlyDescription
          } else if (dataHourlyDescription === "overcast clouds") {
            pictureSource =
              "https://res.cloudinary.com/dewznnjqr/image/upload/v1681207506/maweatherapp/icon-broken-clouds-day_x3xuy8.png"
            forecastWeatherHour[i].title = dataHourlyDescription
          }
        } else if (AtmosphereWeather.includes(dataHourlyMain)) {
          pictureSource =
            "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134910/maweatherapp/icon-mist-day_z33ury.png"
          forecastWeatherHour[i].title = dataHourlyDescription
        } else if (dataHourlyMain === "Tornado") {
          pictureSource =
            "https://res.cloudinary.com/dewznnjqr/image/upload/v1681156605/maweatherapp/icon-tornado-day_ackxb9.png"
          forecastWeatherHour[i].title = dataHourlyDescription
        } else if (dataHourlyMain === "Snow") {
          pictureSource =
            "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134911/maweatherapp/icon-snow-day_ol7kgq.png"
          forecastWeatherHour[i].title = dataHourlyDescription
        } else if (dataHourlyMain === "Rain") {
          pictureSource =
            "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134911/maweatherapp/icon-shower-rain-day_zij6wr.png"
          forecastWeatherHour[i].title = dataHourlyDescription
        } else if (dataHourlyMain === "Drizzle") {
          pictureSource =
            "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134909/maweatherapp/icon-drizzle-day_vmfudt.png"
          forecastWeatherHour[i].title = dataHourlyDescription
        } else if (dataHourlyMain === "Thunderstorm") {
          pictureSource =
            "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134911/maweatherapp/icon-thunderstorm-day_svukzl.png"
          forecastWeatherHour[i].title = dataHourlyDescription
        }
      } else if (
        parseInt(currentTimeStamp) < parseInt(sunriseTimeStamp) ||
        parseInt(currentTimeStamp) >= parseInt(sunsetTimeStamp)
      ) {
        if (dataHourlyMain === "Clear") {
          pictureSource =
            "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134910/maweatherapp/icon-clear-sky-night_lhsde2.png"
          forecastWeatherHour[i].title = dataHourlyDescription
        } else if (dataHourlyMain === "Clouds") {
          if (dataHourlyDescription === "scattered clouds") {
            pictureSource =
              "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134910/maweatherapp/icon-scattered-clouds-night_sbd0dj.png"
            forecastWeatherHour[i].title = dataHourlyDescription
          } else if (dataHourlyDescription === "few clouds") {
            pictureSource =
              "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134909/maweatherapp/icon-few-clouds-night_vwqzuv.png"
            forecastWeatherHour[i].title = dataHourlyDescription
          } else if (dataHourlyDescription === "broken clouds") {
            pictureSource =
              "https://res.cloudinary.com/dewznnjqr/image/upload/v1681207565/maweatherapp/icon-broken-clouds-night_ypb5bq.png"
            forecastWeatherHour[i].title = dataHourlyDescription
          } else if (dataHourlyDescription === "overcast clouds") {
            pictureSource =
              "https://res.cloudinary.com/dewznnjqr/image/upload/v1681207565/maweatherapp/icon-broken-clouds-night_ypb5bq.png"
            forecastWeatherHour[i].title = dataHourlyDescription
          }
        } else if (AtmosphereWeather.includes(dataHourlyMain)) {
          pictureSource =
            "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134910/maweatherapp/icon-mist-night_sfsdpk.png"
          forecastWeatherHour[i].title = dataHourlyDescription
        } else if (dataHourlyMain === "Tornado") {
          pictureSource =
            "https://res.cloudinary.com/dewznnjqr/image/upload/v1681156605/maweatherapp/icon-tornado-night_d4xb42.png"
          forecastWeatherHour[i].title = dataHourlyDescription
        } else if (dataHourlyMain === "Snow") {
          pictureSource =
            "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134911/maweatherapp/icon-snow-night_hbffey.png"
          forecastWeatherHour[i].title = dataHourlyDescription
        } else if (dataHourlyMain === "Rain") {
          pictureSource =
            "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134911/maweatherapp/icon-shower-rain-night_bkxuwm.png"
          forecastWeatherHour[i].title = dataHourlyDescription
        } else if (dataHourlyMain === "Drizzle") {
          pictureSource =
            "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134910/maweatherapp/icon-drizzle-night_fiblao.png"
          forecastWeatherHour[i].title = dataHourlyDescription
        } else if (dataHourlyMain === "Thunderstorm") {
          pictureSource =
            "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134911/maweatherapp/icon-thunderstorm-night_ltqz0k.png"
          forecastWeatherHour[i].title = dataHourlyDescription
        }
      }
      return (
        <div class="hourly-forecast flexc">
        <p class="hourly-forecast-title">Hourly Forecast</p>
        <div class="fiveh-forecast flexr">
          <div class="now flexc">
            <p class="forecast-hour">Now</p>
            <p class="forecast-temperature-hour">temp</p>
            <img
              src={pictureSource}
              class="forecast-weather-hour"
              alt="Icon for weather forecast"
              title="weather forecast"
            />
            <div class="humidity flexr centered">
              <p class="forecast-humididty-hour">humidity</p>
              <img
                src={pictureSource}
                class="icon-humidity"
                alt="Icon of humidity"
                title="humidity"
              />
            </div>
          </div>
          <div class="plus1h flexc">
            <p class="forecast-hour">plus1h</p>
            <p class="forecast-temperature-hour">temp</p>
            <img
              src={pictureSource}
              class="forecast-weather-hour"
              alt="Icon for weather forecast"
              title="weather forecast"
            />
            <div class="flexr centered">
              <p class="forecast-humididty-hour">humidity</p>
              <img
                src={pictureSource}
                class="icon-humidity"
                alt="Icon of humidity"
                title="humidity"
              />
            </div>
          </div>
          <div class="plus2h flexc">
            <p class="forecast-hour">plus2h</p>
            <p class="forecast-temperature-hour">temp</p>
            <img
              src="https://res.cloudinary.com/dewznnjqr/image/upload/v1681134909/maweatherapp/icon-clear-sky-day_yrsvbs.png"
              class="forecast-weather-hour"
              alt="Icon for weather forecast"
              title="weather forecast"
            />
            <div class="flexr centered">
              <p class="forecast-humididty-hour">humidity</p>
              <img
                src="https://res.cloudinary.com/dewznnjqr/image/upload/v1681134910/maweatherapp/icon-humidity_unabmr.png"
                class="icon-humidity"
                alt="Icon of humidity"
                title="humidity"
              />
            </div>
          </div>
          <div class="plus3h flexc">
            <p class="forecast-hour">plus3h</p>
            <p class="forecast-temperature-hour">temp</p>
            <img
              src={pictureSource}
              class="forecast-weather-hour"
              alt="Icon for weather forecast"
              title="weather forecast"
            />
            <div class="flexr centered">
              <p class="forecast-humididty-hour">humidity</p>
              <img
                src={pictureSource}
                class="icon-humidity"
                alt="Icon of humidity"
                title="humidity"
              />
            </div>
          </div>
          <div class="plus4h flexc">
            <p class="forecast-hour">plus4h</p>
            <p class="forecast-temperature-hour">temp</p>
            <img
              src={pictureSource}
              class="forecast-weather-hour"
              alt="Icon for weather forecast"
              title="weather forecast"
            />
            <div class="flexr centered">
              <p class="forecast-humididty-hour">humidity</p>
              <img
                src={pictureSource}
                class="icon-humidity"
                alt="Icon of humidity"
                title="humidity"
              />
            </div>
          </div>
        </div>
        <button>
          <p class="next-tf-hours">Next 24 Hours</p>
        </button>
      </div>
      )
    }
  }

  export default HourlyForecast;