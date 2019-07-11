import React, { useState, useEffect } from "react";
import axios from "axios";
// import other components
import Copyright from "./components/Copyright";
import Date from "./components/Date";
import DateForm from "./components/DateForm";
import Explanation from "./components/Explanation";
import Image from "./components/Image";
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
    <div className="App">
      <div className="logo">
        <img
          className="nasa"
          src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
          alt="nasa"
        />
      </div>
      <DateForm hdurl={hdurl} setFetchDate={setFetchDate} fetchDate={fetchDate}/>
      <Title title={title} />
      <Date date={date} />
      <Explanation explanation={explanation} />
      <MediaType media_type={media_type} />
      <ServiceVersion service_version={service_version} />
      <Copyright copyright={copyright} />
      <Image hdurl={hdurl} />
    </div>
  );
}

export default App;
