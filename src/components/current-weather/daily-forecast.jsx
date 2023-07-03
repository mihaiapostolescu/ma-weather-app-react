import "./daily-hourly-forecast.css"

const DailyForecast = ({ data }) => {
  const dailyForecastItems = [];

  for (let i = 0; i <= 5; i++) {
    const dailyTimeStamp = data.daily[i].dt
    const dailyDate = new Date(dailyTimeStamp * 1000)
    const options = {
      weekday: "long",
      // year: "numeric",
      // month: "long",
      // day: "numeric",
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
      pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134909/maweatherapp/icon-clear-sky-day_yrsvbs.png"
    } else if (dataDailyMain === "Clouds") {
      if (dataDailyDescription === "scattered clouds") {
        pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134910/maweatherapp/icon-scattered-clouds-day_psh3zf.png"
      } else if (dataDailyDescription === "few clouds") {
        pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134909/maweatherapp/icon-few-clouds-day_gw7apg.png"
      } else if (dataDailyDescription === "broken clouds") {
        pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681207506/maweatherapp/icon-broken-clouds-day_x3xuy8.png"
      } else if (dataDailyDescription === "overcast clouds") {
        pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681207506/maweatherapp/icon-broken-clouds-day_x3xuy8.png"
      }
    } else if (AtmosphereWeather.includes(dataDailyMain)) {
      pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134910/maweatherapp/icon-mist-day_z33ury.png"
    } else if (dataDailyMain === "Tornado") {
      pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681156605/maweatherapp/icon-tornado-day_ackxb9.png"
    } else if (dataDailyMain === "Snow") {
      pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134911/maweatherapp/icon-snow-day_ol7kgq.png"
    } else if (dataDailyMain === "Rain") {
      pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134911/maweatherapp/icon-shower-rain-day_zij6wr.png"
    } else if (dataDailyMain === "Drizzle") {
      pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134909/maweatherapp/icon-drizzle-day_vmfudt.png"
    } else if (dataDailyMain === "Thunderstorm") {
      pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134911/maweatherapp/icon-thunderstorm-day_svukzl.png"
    }


    dailyForecastItems.push(
      <div className="forecast-item" key={i}>
        <div className="today flexc">
          <p className="forecast-day">{dailyTimeString}</p>
          <div className="temp-day-night flexr centered">
            <p className="forecast-temperature-day" title="During day">{Math.round(data.daily[i].temp.day)}</p>
            <p className="backslash">/</p>
            <p className="forecast-temperature-night" title="During night">{Math.round(data.daily[i].temp.night)}</p>
          </div>
          <img
            src={pictureSource}
            className="forecast-weather-day"
            alt="Icon for weather forecast"
            title={dataDailyDescription}
          />
          <div className="humidity flexr centered">
            <p className="forecast-humidity-day">{data.daily[i].humidity}</p>
            <img
              src="https://res.cloudinary.com/dewznnjqr/image/upload/v1681134910/maweatherapp/icon-humidity_unabmr.png"
              className="icon-humidity"
              alt="Icon of humidity"
              title="humidity"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="daily-forecast flexc">
      <p className="daily-forecast-title">Daily Forecast</p>
      <div className="fived-forecast flexr">
        {dailyForecastItems}
      </div>
      <button>
        <p className="next-seven-days">Next 7 Days</p>
      </button>
    </div>
  )
}

export default DailyForecast;