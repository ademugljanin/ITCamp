import React from "react";

function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <h1 className="title"></h1>
      <p className="text">{props.value.summary}</p>
      <img src={props.value.media} alt="" className="picture" />
    </div>
  );
}

export default Card;
