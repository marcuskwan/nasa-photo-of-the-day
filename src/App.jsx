import React, { useState, useEffect } from "react";
import axios from "axios";
// import other components
import Title from "./components/Title";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  console.log(data);
  const title = data.title;
  console.log(title);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=i6kXrRAugKWMaP1p9kYk4nKRGQSmCIgqenF7r0hT&date=2012-03-14",
      )
      .then(response => setData(response.data))
      .catch(error => console.log("oh no, something went wrong!"));
    // return () => {
    //   effect
    // };
  }, []);
  return (
    <div className="App">
      <Title />
    </div>
  );
}

export default App;
