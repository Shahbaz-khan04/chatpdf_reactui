import React from "react";
import { cardData } from "../../data/cards";
import Card from "./Card";

function Cards() {
  return (
    <div className="flex justify-center mx-4 gap-x-3 flex-wrap">
      {cardData.map((card, index) => (
        <Card card={card} key={index} />
      ))}
    </div>
  );
}

export default Cards;
