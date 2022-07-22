import { useEffect } from "react";
import { useState } from "react";

const Card = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => 
    {console.log("Daris")}, [isChecked]
  );
  return (
    <div className={`card ${isChecked ? "checked" : ""}`}>
      <p>{props.title}</p>
      <div>
        <button
          className="check"
          onClick={() => {
            setIsChecked(!isChecked);
          }}
        >
          CEKIRAJ
        </button>
        <button className="delete" onClick={props.onDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default Card;
