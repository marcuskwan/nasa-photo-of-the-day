import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=i6kXrRAugKWMaP1p9kYk4nKRGQSmCIgqenF7r0hT&date=2012-03-14",
      )
      .then(response => setData(response.data.url))
      .catch(error => "oh no, something went wrong!");
    // return () => {
    //   effect
    // };
  }, []);
  return (
    <div className="App">
      <div className="apod">
        <img src={data} alt="apod"/>
      </div>
    </div>
  );
}

export default App;
