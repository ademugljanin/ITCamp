import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  let searchValue = "";
  const [user, setUser] = useState();
  const getGithubData = (user) => {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  };
  useEffect(() => {
    getGithubData();
  }, []);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          searchValue = e.target.value;
        }}
      />
      <button
        onClick={() => {
          getGithubData(searchValue);
        }}
      >
        SUBMIT
      </button>
      <h1>{user?.name}</h1>
      <img src={user?.avatar_url} alt="" />
    </div>
  );
}
export default App;