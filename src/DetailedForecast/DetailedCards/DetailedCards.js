import React from "react";
import "./DetailedCards.css";
import hight from "../../cloudinessIcon/hight.svg";
import medium from "../../cloudinessIcon/medium.svg";
import low from "../../cloudinessIcon/low.svg";
const DetailedCards = (props) => {
  const cloudinessMap = new Map([
    ["cloudy", hight],
    ["overcast", medium],
    ["clear", low],
  ]);

  return (
    <div>
      <div className="card__wrapper">
        <div className="card__time">{props.state.time}</div>
        <div className="card__temp">{props.state.temp}&deg;</div>
        <div>
          <img
            className="card__image"
            src={cloudinessMap.get(props.state?.description)}
            alt="ff"
          />
        </div>
        <div className="card__description">{props.state.description}</div>
      </div>
    </div>
  );
};

export default DetailedCards;
