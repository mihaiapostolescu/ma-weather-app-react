import "./current-weather.css"

const CurrentWeather = ({data}) => {

    const mainTimeStamp = data.hourly[0].dt
    const mainDate = new Date(mainTimeStamp * 1000)
    const mainOptions = {
        weekday: "long",
        // year: "numeric",
        month: "long",
        day: "numeric",
      }

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
    let dataCurrentWeather = data.current.weather[0].main
    let dataCurrentDescription = data.current.weather[0].description

    return (
        <div className="weather-app flexr">
          <div className="flexc">
            <h1 className="temp">{Math.round(data.current.temp)}&#176;</h1>
            <div className="city-time">
              <h1 className="city-name">{data.city}</h1>
              <small>
                <p className="time">{mainDate.toLocaleString().split(",")[1].split(":")[0]+ ":" + mainDate.toLocaleString().split(",")[1].split(":")[1]}</p>
                <p className="date">{mainDate.toLocaleString("en-US", mainOptions)}</p>
              </small>
            </div>
            <div className="weather flexr">
              <img
                src="https://res.cloudinary.com/dewznnjqr/image/upload/v1681134909/maweatherapp/icon-clear-sky-day_yrsvbs.png"
                className="icon-weather-forecast"
                alt="Icon for weather forecast"
                title="weather forecast"
              />
              <p className="weather-forecast">{data.current.weather[0].description}</p>
            </div>
          </div>
      </div>
    );
}

export default CurrentWeather;

