import "./current-weather-background.css"

const CurrentWeatherBackground = ({data}) => {
    const mainCurrentTimeStamp = data.current.dt
    const mainSunriseTimeStamp = data.current.sunrise
    const mainsunsetTimeStamp = data.current.sunset
    const mainTimeStamp = data.hourly[0].dt
    const mainDate = new Date(mainTimeStamp * 1000)
    const mainOptions = {
        weekday: "long",
        // year: "numeric",
        month: "long",
        day: "numeric",
    }

    let dataCurrentWeather = data.current.weather[0].main
    let dataCurrentDescription = data.current.weather[0].description
    let backgroundPictureSource
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
          backgroundPictureSource =
            "https://res.cloudinary.com/dewznnjqr/image/upload/v1681206379/maweatherapp/picture-clear-sky-day_nljg6p.jpg"
        } else if (dataCurrentWeather === "Clouds") {
          if (dataCurrentDescription === "scattered clouds") {
            backgroundPictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681206378/maweatherapp/picture-scattered-clouds-day_j3oemp.jpg"
          } else if (dataCurrentDescription === "few clouds") {
            backgroundPictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681206379/maweatherapp/picture-few-clouds-day_mtbeiw.jpg"
          } else if (dataCurrentDescription === "broken clouds") {
            backgroundPictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681206380/maweatherapp/picture-broken-clouds-day_kcu0lh.jpg"
          } else if (dataCurrentDescription === "overcast clouds") {
            backgroundPictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681206380/maweatherapp/picture-overcast-clouds-day_g1pgye.jpg"
          }
        } else if (AtmosphereWeather.includes(dataCurrentWeather)) {
          backgroundPictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681206380/maweatherapp/picture-mist-day_bzb066.jpg"
        } else if (dataCurrentWeather === "Tornado") {
          backgroundPictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681208929/maweatherapp/picture-tornado-day_elvxkn.jpg"
        } else if (dataCurrentWeather === "Snow") {
          backgroundPictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681206378/maweatherapp/picture-snow-day_emeopq.jpg"
        } else if (dataCurrentWeather === "Rain") {
          backgroundPictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681206381/maweatherapp/picture-rain-day_leusga.jpg"
        } else if (dataCurrentWeather === "Drizzle") {
          backgroundPictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681206380/maweatherapp/picture-drizzle-day_snyp7w.jpg"
        } else if (dataCurrentWeather === "Thunderstorm") {
          backgroundPictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681206378/maweatherapp/picture-thunderstorm-day_n1x2iy.jpg"
        }
      } else if (
        parseInt(mainCurrentTimeStamp) < parseInt(mainSunriseTimeStamp) ||
        parseInt(mainCurrentTimeStamp) >= parseInt(mainsunsetTimeStamp)
      ) {
        if (dataCurrentWeather === "Clear") {
          backgroundPictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681206380/maweatherapp/picture-clear-sky-night_xpwdbv.jpg"
        } else if (dataCurrentWeather === "Clouds") {
          if (dataCurrentDescription === "scattered clouds") {
            backgroundPictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681206378/maweatherapp/picture-scattered-clouds-night_ljbkao.jpg"
          } else if (dataCurrentDescription === "few clouds") {
            backgroundPictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681206382/maweatherapp/picture-few-clouds-night_dl3oct.jpg"
          } else if (dataCurrentDescription === "broken clouds") {
            backgroundPictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681206380/maweatherapp/picture-broken-clouds-night_w8m8rr.jpg"
          } else if (dataCurrentDescription === "overcast clouds") {
            backgroundPictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681206380/maweatherapp/picture-overcast-clouds-night_qlvwaf.jpg"
          }
        } else if (AtmosphereWeather.includes(dataCurrentWeather)) {
          backgroundPictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681206380/maweatherapp/picture-mist-night_lrouuz.jpg"
        } else if (dataCurrentWeather === "Tornado") {
          backgroundPictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681208929/maweatherapp/picture-tornado-night_wfyxwx.jpg"
        } else if (dataCurrentWeather === "Snow") {
          backgroundPictureSource =  "https://res.cloudinary.com/dewznnjqr/image/upload/v1681206378/maweatherapp/picture-snow-night_skjsfd.jpg"
        } else if (dataCurrentWeather === "Rain") {
          backgroundPictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681206381/maweatherapp/picture-rain-night_raxypn.jpg"
        } else if (dataCurrentWeather === "Drizzle") {
          backgroundPictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681206379/maweatherapp/picture-drizzle-night_fd0asi.jpg"
        } else if (dataCurrentWeather === "Thunderstorm") {
          backgroundPictureSource = "https://res.cloudinary.com/dewznnjqr/image/upload/v1681206379/maweatherapp/picture-thunderstorm-night_t71ybu.jpg"
        }
      }

    return (
        <div className="background-picture">
        <img
          src={backgroundPictureSource}
          className="picture-weather-type"
          alt="Picture of weather type"
        />
      </div>
    );
}

export default CurrentWeatherBackground;
