import './App.css'
import { MantineProvider, Container, Box, Grid, Navbar, Stack, Button, Text, Select } from '@mantine/core';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_KEY, WEATHER_API_URL } from '../geoApi';
import { useState } from 'react';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/onecall?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({ city: searchData.label, ...weatherResponse});
      setForecast({ city: searchData.label, ...forecastResponse});
    })
    .catch((err) => console.log(err));
  }

  console.log(CurrentWeather);
  console.log(forecast);


  return (

    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Navbar>
        <Grid style={{ height: '100%', width: '100%' }} p={20}>
            <Grid.Col span="auto" style={{ color: "black" }}>  
            <Text fs="bold">maweather</Text>      
              <Stack align="left" justify="space-around" h="100%" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>
                <Text fs="italic"></Text>
                {/* <Search onSearchChange={handleOnSearchChange} /> */}
                {currentWeather && <CurrentWeather data={currentWeather} />}
              </Stack>
            </Grid.Col>
            <Grid.Col span="content" style={{ textAlign: "center", backgroundColor: "red" }} md={6}>
              <div className="container">
              <Search onSearchChange={handleOnSearchChange}/>
              </div>
            </Grid.Col>
            <Grid.Col span="auto" style={{ textAlign: "right" }}>span=auto</Grid.Col>
          </Grid>
      </Navbar>

      <Navbar fixed={false} position={{ top: 0, left: 0 }} >
        <Grid style={{ height: `100%` }}>
            <Grid.Col span="auto" style={{ color: "blue"}}>span=auto</Grid.Col>
            <Grid.Col span={6} style={{ textAlign: "center", backgroundColor: "red", height: "100%"}}>span=6</Grid.Col>
            <Grid.Col span="auto" style={{ textAlign: "right"}}>span=auto</Grid.Col>
          </Grid>
          </Navbar>
    </MantineProvider>
  );
}

export default App
