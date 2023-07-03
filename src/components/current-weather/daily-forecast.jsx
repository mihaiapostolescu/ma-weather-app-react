import "./daily-hourly-forecast.css"

const DailyForecast = ({data}) => {
    for (let i = 0; i <= 4; i++) {
      const dailyTimeStamp = data.daily[i].dt
      const dailyDate = new Date(dailyTimeStamp * 1000)
      const options = {
        weekday: "long",
        // year: "numeric",
        month: "long",
        day: "numeric",
      }
      const dailyTimeString = dailyDate.toLocaleString("en-US", options)
      let dataDailyMain = data.daily[i].weather[0].main
      let dataDailyDescription = data.daily[i].weather[0].description
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
  
      if (dataDailyMain === "Clear") {
        let pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134909/maweatherapp/icon-clear-sky-day_yrsvbs.png"
      } else if (dataDailyMain === "Clouds") {
        if (dataDailyDescription === "scattered clouds") {
          let pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134910/maweatherapp/icon-scattered-clouds-day_psh3zf.png"

        } else if (dataDailyDescription === "few clouds") {
          let pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134909/maweatherapp/icon-few-clouds-day_gw7apg.png"

        } else if (dataDailyDescription === "broken clouds") {
          let pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681207506/maweatherapp/icon-broken-clouds-day_x3xuy8.png"

        } else if (dataDailyDescription === "overcast clouds"){
          let pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681207506/maweatherapp/icon-broken-clouds-day_x3xuy8.png"

        }
      } else if (AtmosphereWeather.includes(dataDailyMain)) {
        let pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134910/maweatherapp/icon-mist-day_z33ury.png"
      } else if (dataDailyMain === "Tornado") {
        let pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681156605/maweatherapp/icon-tornado-day_ackxb9.png"
      } else if (dataDailyMain === "Snow") {
        let pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134911/maweatherapp/icon-snow-day_ol7kgq.png"
      } else if (dataDailyMain === "Rain") {
        let pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134911/maweatherapp/icon-shower-rain-day_zij6wr.png"
      } else if (dataDailyMain === "Drizzle") {
        let pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134909/maweatherapp/icon-drizzle-day_vmfudt.png"
      } else if (dataDailyMain === "Thunderstorm") {
        let pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134911/maweatherapp/icon-thunderstorm-day_svukzl.png"
      }
    }

    return (
        <div className="daily-forecast flexc">
        <p className="daily-forecast-title">Daily Forecast</p>
        <div className="fived-forecast flexr">
          <div className="today flexc">
            <p className="forecast-day">Today</p>
            <div className="temp-day-night flexr centered">
              <p className="forecast-temperature-day" title="During day">temp</p>
              <p className="backslash">/</p>
              <p className="forecast-temperature-night" title="During night">
                temp
              </p>
            </div>
            <img
              src="https://res.cloudinary.com/dewznnjqr/image/upload/v1681134909/maweatherapp/icon-clear-sky-day_yrsvbs.png"
              className="forecast-weather-day"
              alt="Icon for weather forecast"
              title="weather forecast"
            />
            <div className="humidity flexr centered">
              <p className="forecast-humidity-day">humidity</p>
              <img
                src="https://res.cloudinary.com/dewznnjqr/image/upload/v1681134910/maweatherapp/icon-humidity_unabmr.png"
                className="icon-humidity"
                alt="Icon of humidity"
                title="humidity"
              />
            </div>
          </div>
          <div className="plus1d flexc">
            <p className="forecast-day">plus1d</p>
            <div className="temp-day-night flexr centered">
              <p className="forecast-temperature-day" title="During day">temp</p>
              <p className="backslash">/</p>
              <p className="forecast-temperature-night" title="During night">
                temp
              </p>
            </div>
            <img
              src="https://res.cloudinary.com/dewznnjqr/image/upload/v1681134909/maweatherapp/icon-clear-sky-day_yrsvbs.png"
              className="forecast-weather-day"
              alt="Icon for weather forecast"
              title="weather forecast"
            />
            <div className="humidity flexr centered">
              <p className="forecast-humidity-day">humidity</p>
              <img
                src="https://res.cloudinary.com/dewznnjqr/image/upload/v1681134910/maweatherapp/icon-humidity_unabmr.png"
                className="icon-humidity"
                alt="Icon of humidity"
                title="humidity"
              />
            </div>
          </div>
          <div className="plus2d flexc">
            <p className="forecast-day">plus2d</p>
            <div className="temp-day-night flexr centered">
              <p className="forecast-temperature-day" title="During day">temp</p>
              <p className="backslash">/</p>
              <p className="forecast-temperature-night" title="During night">
                temp
              </p>
            </div>
            <img
              src="https://res.cloudinary.com/dewznnjqr/image/upload/v1681134909/maweatherapp/icon-clear-sky-day_yrsvbs.png"
              className="forecast-weather-day"
              alt="Icon for weather forecast"
              title="weather forecast"
            />
            <div className="humidity flexr centered">
              <p className="forecast-humidity-day">humidity</p>
              <img
                src="https://res.cloudinary.com/dewznnjqr/image/upload/v1681134910/maweatherapp/icon-humidity_unabmr.png"
                className="icon-humidity"
                alt="Icon of humidity"
                title="humidity"
              />
            </div>
          </div>
          <div className="plus3d flexc">
            <p className="forecast-day">plus3d</p>
            <div className="temp-day-night flexr centered">
              <p className="forecast-temperature-day" title="During day">temp</p>
              <p className="backslash">/</p>
              <p className="forecast-temperature-night" title="During night">
                temp
              </p>
            </div>
            <img
              src="https://res.cloudinary.com/dewznnjqr/image/upload/v1681134909/maweatherapp/icon-clear-sky-day_yrsvbs.png"
              className="forecast-weather-day"
              alt="Icon for weather forecast"
              title="weather forecast"
            />
            <div className="humidity flexr centered">
              <p className="forecast-humidity-day">humidity</p>
              <img
                src="https://res.cloudinary.com/dewznnjqr/image/upload/v1681134910/maweatherapp/icon-humidity_unabmr.png"
                className="icon-humidity"
                alt="Icon of humidity"
                title="humidity"
              />
            </div>
          </div>
          <div className="plus4d flexc">
            <p className="forecast-day">plus4d</p>
            <div className="temp-day-night flexr centered">
              <p className="forecast-temperature-day" title="During day">temp</p>
              <p className="backslash">/</p>
              <p className="forecast-temperature-night" title="During night">
                temp
              </p>
            </div>
            <img
              src="https://res.cloudinary.com/dewznnjqr/image/upload/v1681134909/maweatherapp/icon-clear-sky-day_yrsvbs.png"
              className="forecast-weather-day"
              alt="Icon for weather forecast"
              title="weather forecast"
            />
            <div className="humidity flexr centered">
              <p className="forecast-humidity-day">humidity</p>
              <img
                src="https://res.cloudinary.com/dewznnjqr/image/upload/v1681134910/maweatherapp/icon-humidity_unabmr.png"
                className="icon-humidity"
                alt="Icon of humidity"
                title="humidity"
              />
            </div>
          </div>
        </div>
        <button>
          <p className="next-seven-days">Next 7 Days</p>
        </button>
      </div>
    )
  }

  export default DailyForecast;