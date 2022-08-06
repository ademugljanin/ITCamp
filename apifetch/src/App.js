import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [data, setData] = useState("");
  const [inputedData, setInputedData] = useState("");

  const options = {
    method: "GET",
    url: "https://free-news.p.rapidapi.com/v1/search",
    params: { q: "Elon Musk", lang: "en" },
    headers: {
      "X-RapidAPI-Key": "4d79fa5e30msh3acb81244db0180p1e3680jsnee222f3ba15a",
      "X-RapidAPI-Host": "free-news.p.rapidapi.com",
    },
  };

  const fetchNumberData = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.articles);
        setData(response.data.articles);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchNumberData();
  }, []);

  const search = () => {
    options.url = `https://free-news.p.rapidapi.com/v1/search?q=${inputedData}&lang=en`;
    fetchNumberData();
  };
  console.log(data);
  return (
    <div className="App">
      <input
        type="text"
        onChange={(input) => {
          setInputedData(input.target.value);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          search();
        }}
      >
        Submit
      </button>
      {data?.map((e)=>{
        return (
        <Card value={e}/>
      )})}
    </div>
  );
}

export default App;
