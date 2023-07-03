import './App.css'
import { MantineProvider, Container, Box, Grid, Navbar, Stack, Button, Text, Select, BackgroundImage, Center, Group, Image, Overlay, AspectRatio, Header, AppShell, rem, MediaQuery } from '@mantine/core';
import { useElementSize, useMediaQuery } from '@mantine/hooks';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import CurrentWeatherBackground from './components/current-weather/current-weather-background';
import { WEATHER_API_KEY, WEATHER_API_URL } from '../geoApi';
import { useState, useEffect } from 'react';

  function App() {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);
    const [currentWeatherBackground, setCurrentWeatherBackground] = useState(null);
  
    const handleOnSearchChange = (searchData) => {
    }
  
    const getCityName = (lat, lon) => {
      const apiKey = WEATHER_API_KEY;
      const geoUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`;
  
      return new Promise((resolve, reject) => {
        fetch(geoUrl)
          .then((response) => response.json())
          .then((geo) => {
            const cityName = geo[0].name;
            resolve(cityName);
          })
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      });
    };
  
    useEffect(() => {
      const getCurrentLocation = () => {
        return new Promise((resolve, reject) => {
          if (!navigator.geolocation) {
            reject(new Error('Geolocation is not supported by this browser.'));
            return;
          }
  
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
              resolve({ latitude, longitude });
            },
            (error) => {
              reject(error);
            }
          );
        });
      };
  
      getCurrentLocation()
        .then((position) => {
          const { latitude, longitude } = position;
  
          getCityName(latitude, longitude)
            .then((cityName) => {
              const currentWeatherFetch = fetch(`${WEATHER_API_URL}/onecall?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`);
              const forecastFetch = fetch(`${WEATHER_API_URL}/onecall?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`);
              const currentWeatherBackgroundFetch = fetch(`${WEATHER_API_URL}/onecall?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`);
  
              Promise.all([currentWeatherFetch, forecastFetch, currentWeatherBackgroundFetch])
                .then(async (responses) => {
                  const [weatherResponse, forecastResponse, weatherBackgroundResponse] = await Promise.all(responses.map(response => response.json()));
                  setCurrentWeather({ city: cityName, ...weatherResponse });
                  setForecast({ city: cityName, ...forecastResponse });
                  setCurrentWeatherBackground({ city: cityName, ...weatherBackgroundResponse });
                })
                .catch((err) => console.log(err));
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    }, []);

  console.log(currentWeather);

  return (
    <>

    {currentWeatherBackground && <CurrentWeatherBackground data={currentWeatherBackground}/>}

    <MantineProvider withGlobalStyles withNormalizeCSS>

    <Header height={{ base: 80, md: 80 }} style={{ width: '100%', zIndex: 4, backgroundColor: "white" }} fixed={true} >
      <div>
          <Grid style={{ height: '100%', width: '100%', zIndex: 3, minWidth: 350 }} p={20}>
              <Grid.Col span="auto" style={{ color: "black" }} pb={20}>  
              <Text fs="bold" pt={10}>maweather</Text>      
              </Grid.Col>
              <Grid.Col span="content" style={{ textAlign: "center"}} md={6}>
                <div className="container">
                <Search onSearchChange={handleOnSearchChange}/>
                </div>
              </Grid.Col>
              <Grid.Col span="auto" style={{ textAlign: "right" }}></Grid.Col>
            </Grid>
        </div>
      </Header>
   
      <Navbar>
        <Grid style={{ height: '100%', width: '100%', zIndex: 3 }} p={20}>
            <Grid.Col span="auto" style={{ color: "black" }} pb={20}>  
            <Text fs="bold" pt={10}></Text>      
              <Stack align="left" justify="space-around" h="130%">
              {/* <Stack align="left" justify="space-around" h="100%" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[8] })}> */}
                <Text fs="italic"></Text>
                {/* <Search onSearchChange={handleOnSearchChange} /> */}
                {currentWeather && <CurrentWeather data={currentWeather} />}
              </Stack>
            </Grid.Col>
            <Grid.Col span="content" style={{ textAlign: "center"}} md={6}>
            </Grid.Col>
            <Grid.Col span="auto" style={{ textAlign: "right" }}></Grid.Col>
          </Grid>
      </Navbar>

      <Navbar>
        <Grid tyle={{ height: '100%', width: '100%' }} p={20}>
            <Grid.Col span="auto" style={{ color: "blue"}}>span=auto</Grid.Col>
            <Grid.Col span={6} style={{ textAlign: "center", backgroundColor: "red", height: "100%"}}>span=6</Grid.Col>
            <Grid.Col span="auto" style={{ textAlign: "right"}}>span=auto</Grid.Col>
          </Grid>
          </Navbar>
    </MantineProvider>
    </>
  );
}

export default App
