import './App.css'
import { MantineProvider, Container, Box, Grid, Navbar } from '@mantine/core';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Navbar fixed={false} position={{ top: 0, left: 0 }} mb={10} >
        <Grid style={{ height: '100%' }}>
            <Grid.Col span="auto" style={{ color: "blue" }}>span=auto</Grid.Col>
            <Grid.Col span={3} style={{ textAlign: "center", backgroundColor: "red" }}>span=6</Grid.Col>
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
