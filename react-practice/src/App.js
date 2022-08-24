import "./App.css";
import { useContext } from "react";
import { Context } from "./UserContext";
function App() {
  const { user, setUser } = useContext(Context);
  return (
    <div>
      <button
        onClick={() => {
          setUser(user - 1);
        }}
      >
        -
      </button>
      <h1>{user}</h1>
      <button
      onClick={() => {
          setUser(user + 1);
        }}
      >
        +

      </button>
    </div>
  );
}

export default App;
