//sets up the reusable GameCard for clickable images
import React from "react";
import "./card.css"

//pass the image into each card so all 12 are rendered
const GameCard = props => (
  <div className="keanu-card" onClick={props.keanuCard}>
      <img alt={props.image.replace(".jpg", "")} src={require("../../public/images/" + props.image)} />
  </div>
);

export default GameCard;
