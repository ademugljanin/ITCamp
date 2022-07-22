import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
const App = () => {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    fetch("https://catfact.ninja/facts")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setFacts([...res.data]);
      });
  }, []);

  return <div>
    {facts.map((el)=> {
      return <h1>{el.fact}</h1>
    })}
  </div>;
};

export default App;
