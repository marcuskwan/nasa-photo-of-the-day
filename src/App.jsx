import React, { useState, useEffect } from "react";
import { Icon, Header, Container, Grid, Image } from "semantic-ui-react";
import axios from "axios";
// import other components
import Copyright from "./components/Copyright";
import Date from "./components/Date";
import DateForm from "./components/DateForm";
import Explanation from "./components/Explanation";
import MediaType from "./components/MediaType";
import ServiceVersion from "./components/ServiceVersion";
import Title from "./components/Title";
import "./App.css";

function App() {
  const [fetchDate, setFetchDate] = useState("2012-03-14");
  const [data, setData] = useState([]);
  const {
    copyright,
    date,
    explanation,
    hdurl,
    media_type,
    service_version,
    title,
  } = data;
  const hi = "his";
  // const updateDate = newDate =>
  // const updateDate = {}

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=i6kXrRAugKWMaP1p9kYk4nKRGQSmCIgqenF7r0hT&date=${fetchDate}`,
      )
      .then(response => {
        setData(response.data);
      })

      .catch(error => console.log(error));
    // return () => {
    //   effect
    // };
  }, [fetchDate]);
  return (
    <Container>
      <Grid verticalAlign="middle" divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column>
            <Image src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" />
          </Grid.Column>
          <Grid.Column  textAlign="center">
            <Header icon>
              <Icon name="search" />
              Search Date
            </Header>
            <DateForm
              hdurl={hdurl}
              setFetchDate={setFetchDate}
              fetchDate={fetchDate}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Title title={title} />
            <Date date={date} />
            <Explanation explanation={explanation} />
            <MediaType media_type={media_type} />
            <ServiceVersion service_version={service_version} />
            <Copyright copyright={copyright} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Image src={hdurl} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default App;
