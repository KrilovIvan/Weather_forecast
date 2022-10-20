import React from "react";
import { NavLink } from "react-router-dom";
import "./DetailedForecast.css";
import DetailedCards from "./DetailedCards/DetailedCards";
import hight from "../cloudinessIcon/hight.svg";
import medium from "../cloudinessIcon/medium.svg";
import low from "../cloudinessIcon/low.svg";
const DetailedForecast = (props) => {
  console.log(props.state.hourlyTemp);
  const detailedCards = props.state.hourlyTemp.map((e) => {
    return <DetailedCards state={e} />;
  });

  const cloudinessMap = new Map([
    ["cloudy", hight],
    ["overcast", medium],
    ["clear", low],
  ]);

  return (
    <div>
      {props.isVisible && (
        <div>

          <div onClick={props.handleVisibility} className="button__wrapper">
            <NavLink to="/" className="back__button">
              &larr; Назад
            </NavLink>
          </div>
          <div className="weather__wrapper">
            <div className="city__name">{props.state.city}</div>

            <div className="common__stat-wrapper">
              <div className="common__stat-temp">
                {props.state.roundedTemp}&deg;
              </div>
              <img
                className="common__stat-img"

                src={cloudinessMap.get(props.state?.totalDescription)}
                alt="ff"
              />
              <div className="commom__stat-feels">
                <div className="feels__description">

                  {props.state.totalDescription}
                </div>
                <div className="feels__temp">
                  Ощущается как {props.state.feelsTemp}&deg;
                </div>
              </div>
            </div>

            <div className="wind__stats-wrapper">
              <div className="wind__style">
                <img
                  className="wind__wind-img"
                  src="https://agrox.by/files/images/wind-weather-lines-group-symbol_icon-icons.com_54629.png"
                  alt="ff"
                />
                {props.state.wind}
              </div>
              <div className="wind__humidity">
                <img
                  className="wind__humidity-img"
                  src="https://cdn4.iconfinder.com/data/icons/ui-outline-5-of-5/100/ui_outline_9-19-512.png"
                  alt="ff"
                />
                {props.state.humidity}%
              </div>
              <div className="wind__pressure">
                <img
                  className="wind__pressure-img"
                  src="https://img.icons8.com/ios/500/speedometer.png"
                  alt="ff"
                />
                {props.state.pressure} мм рт. ст.
              </div>
            </div>

            <div className="detailed__stats-wrapper">{detailedCards}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailedForecast;
