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
  const [data, setData] = useState([]);
  console.log(data);
  const {
    copyright,
    date,
    explanation,
    hdurl,
    media_type,
    service_version,
    title,
  } = data;

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=i6kXrRAugKWMaP1p9kYk4nKRGQSmCIgqenF7r0hT&date=2012-03-14",
      )
      .then(response => setData(response.data))
      .catch(error => console.log(error));
    // return () => {
    //   effect
    // };
  }, []);
  return (
    <div className="App">
      <DateForm />
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
