import "./current-weather.css"

const CurrentWeather = () => {
    return (
        <div className="weather-app flexr">
          <div className="flexc">
            <h1 className="temp">16&#176;</h1>
            <div className="city-time">
              <h1 className="city-name">London</h1>
              <small>
                <p className="time">06:09</p>
                <p className="date">Monday Sep 19</p>
              </small>
            </div>
            <div className="weather flexr">
              <img
                src="https://res.cloudinary.com/dewznnjqr/image/upload/v1681134909/maweatherapp/icon-clear-sky-day_yrsvbs.png"
                className="icon-weather-forecast"
                alt="Icon for weather forecast"
                title="weather forecast"
              />
              <p className="weather-forecast">Sunny</p>
            </div>
          </div>
      </div>
    );
}

export default CurrentWeather;

