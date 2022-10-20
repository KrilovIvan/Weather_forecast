import React from "react";
import s from "./WeatherCard.module.css";
import hight from "../cloudinessIcon/hight.svg";
import medium from "../cloudinessIcon/medium.svg";
import low from "../cloudinessIcon/low.svg";
import Typography from '@mui/material/Typography';

const cloudinessMap = new Map([
  ["thundershtorm", hight],
  ["rain", medium],
  ["clear", low],
]);

function WeatherCard({ weather, setWeather }) {
  return (
    <div
      className={s.weather__wrapper}
      onClick={(e) => {
        console.log("Раскрыть блок " + weather.id);
      }}
    >
      <Typography className={s.cities__name} noWrap={true}>{weather?.city}</Typography>
      <div className={s.temperature}>+{weather?.roundedTemp}&deg;</div>

      <img
        className={s.cloudiness}
        src={cloudinessMap.get(weather?.totalDescription)}
        alt="ff"
      ></img>
      <Typography className={s.cloudinessText} noWrap={true}>{weather?.totalDescription}</Typography>
    </div>
  );
}

export default WeatherCard;
