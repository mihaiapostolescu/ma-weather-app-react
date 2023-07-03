import "./current-weather.css"

const CurrentWeather = ({ data }) => {
  const mainCurrentTimeStamp = data.current.dt
  const mainSunriseTimeStamp = data.current.sunrise
  const mainsunsetTimeStamp = data.current.sunset
  const mainTimeStamp = data.current.dt
  const mainDate = new Date(mainTimeStamp * 1000)
  const mainOptions = {
    weekday: "long",
    // year: "numeric",
    month: "long",
    day: "numeric",
  }

  let dataCurrentWeather = data.current.weather[0].main
  let dataCurrentDescription = data.current.weather[0].description
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
    parseInt(mainCurrentTimeStamp) >= parseInt(mainSunriseTimeStamp) &&
    parseInt(mainCurrentTimeStamp) < parseInt(mainsunsetTimeStamp)
  ) {
    if (dataCurrentWeather === "Clear") {
      pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134909/maweatherapp/icon-clear-sky-day_yrsvbs.png"
    } else if (dataCurrentWeather === "Clouds") {
      if (dataCurrentDescription === "scattered clouds") {
        pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134910/maweatherapp/icon-scattered-clouds-day_psh3zf.png"
      } else if (dataCurrentDescription === "few clouds") {
        pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134909/maweatherapp/icon-few-clouds-day_gw7apg.png"
      } else if (dataCurrentDescription === "broken clouds") {
        pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681207506/maweatherapp/icon-broken-clouds-day_x3xuy8.png"
      } else if (dataCurrentDescription === "overcast clouds") {
        pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681207506/maweatherapp/icon-broken-clouds-day_x3xuy8.png"
      }
    } else if (AtmosphereWeather.includes(dataCurrentWeather)) {
      pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134910/maweatherapp/icon-mist-day_z33ury.png"
    } else if (dataCurrentWeather === "Tornado") {
      pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681156605/maweatherapp/icon-tornado-day_ackxb9.png"
    } else if (dataCurrentWeather === "Snow") {
      pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134911/maweatherapp/icon-snow-day_ol7kgq.png"
    } else if (dataCurrentWeather === "Rain") {
      pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134911/maweatherapp/icon-shower-rain-day_zij6wr.png"
    } else if (dataCurrentWeather === "Drizzle") {
      pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134909/maweatherapp/icon-drizzle-day_vmfudt.png"
    } else if (dataCurrentWeather === "Thunderstorm") {
      pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134911/maweatherapp/icon-thunderstorm-day_svukzl.png"
    }
  } else if (
    parseInt(mainCurrentTimeStamp) < parseInt(mainSunriseTimeStamp) ||
    parseInt(mainCurrentTimeStamp) >= parseInt(mainsunsetTimeStamp)
  ) {
    if (dataCurrentWeather === "Clear") {
      pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134910/maweatherapp/icon-clear-sky-night_lhsde2.png"
    } else if (dataCurrentWeather === "Clouds") {
      if (dataCurrentDescription === "scattered clouds") {
        pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134910/maweatherapp/icon-scattered-clouds-night_sbd0dj.png"
      } else if (dataCurrentDescription === "few clouds") {
        pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134909/maweatherapp/icon-few-clouds-night_vwqzuv.png"
      } else if (dataCurrentDescription === "broken clouds") {
        pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681207565/maweatherapp/icon-broken-clouds-night_ypb5bq.png"
      } else if (dataCurrentDescription === "overcast clouds") {
        pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681207565/maweatherapp/icon-broken-clouds-night_ypb5bq.png"
      }
    } else if (AtmosphereWeather.includes(dataCurrentWeather)) {
      pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134910/maweatherapp/icon-mist-night_sfsdpk.png"
    } else if (dataCurrentWeather === "Tornado") {
      pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681156605/maweatherapp/icon-tornado-night_d4xb42.png"
    } else if (dataCurrentWeather === "Snow") {
      pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134911/maweatherapp/icon-snow-night_hbffey.png"
    } else if (dataCurrentWeather === "Rain") {
      pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134910/maweatherapp/icon-rain-night_glngqi.png"
    } else if (dataCurrentWeather === "Drizzle") {
      pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134910/maweatherapp/icon-drizzle-night_fiblao.png"
    } else if (dataCurrentWeather === "Thunderstorm") {
      pictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681134911/maweatherapp/icon-thunderstorm-night_ltqz0k.png"
    }
  }

  return (
    <div className="weather-app flexr">
      <div className="flexc">
        <h1 className="temp">{Math.round(data.current.temp)}&#176;</h1>
        <div className="city-time">
          <h1 className="city-name">{data.city.split(",")[0]}</h1>
          <small>
            <p className="time">{mainDate.toLocaleString().split(",")[1].split(":")[0] + ":" + mainDate.toLocaleString().split(",")[1].split(":")[1]}</p>
            <p className="date">{mainDate.toLocaleString("en-US", mainOptions)}</p>
          </small>
        </div>
        <div className="weather flexr">
          <img
            src={pictureSource}
            className="icon-weather-forecast"
            alt="Icon for weather forecast"
            title={dataCurrentDescription}
          />
          <p className="weather-forecast">{data.current.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
