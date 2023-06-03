import React from "react";

function Card({ card }) {
  return (
    <div className="bg-slate-50 pb-12 pt-3 cardWidth rounded-lg mt-3">
      <div className="font-medium pb-3 px-6 border-b border-gray-200 flex items-center">
        {card.title}
        <span className="pl-2 text-lg">{card.titleEmoji}</span>
      </div>

      <div className="mb-4 px-6 pt-6 cardText text-sm ">
        {card.description.para1}
      </div>

      <div className="px-6 cardText text-sm">{card.description.para2}</div>
    </div>
  );
}

export default Card;
