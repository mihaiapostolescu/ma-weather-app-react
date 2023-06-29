import './App.css'
import { MantineProvider, Container, Box, Grid, Navbar, Stack, Button, Text, Select } from '@mantine/core';
import Search from './components/search/search';

function App() {
  
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (

    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Navbar>
        <Grid style={{ height: '100%', width: '100%' }} p={20}>
            <Grid.Col span="auto" style={{ color: "blue" }}>  
            <Text fs="italic">Logo</Text>      
              <Stack align="left" justify="space-around" h="100%" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>
                <Text fs="italic"></Text>
                <Text fs="italic">Current Weather</Text>
              </Stack>
            </Grid.Col>
            <Grid.Col span={5} style={{ textAlign: "center", backgroundColor: "red" }}>
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
