import React from "react";

function TravelLocations(props) {
  return (
    <div>
      <img src={props.image} alt={props.name} className="app-logo" />
      <p>{props.name}</p>
      <a href={props.link}>Click here for more details</a>
    </div>
  );
}

export default TravelLocations;
