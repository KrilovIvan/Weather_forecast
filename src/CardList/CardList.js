import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import WeatherCard from "../WeatherCard/WeatherCard";
import DetailedForecast from "../DetailedForecast/DetailedForecast";
import { useState } from "react";
import "./CardList.css";

function CardList({ weathers, setWeathers }) {
  let setWeather = (newWeather) => {
    setWeathers(
      weathers.map((weather) => {
        if (weather.id === newWeather.id) {
          return newWeather;
        } else {
          return weather;
        }
      })
    );
  };
  const [isVisible, setVisible] = useState(false);
  const handleVisibility = () => setVisible(!isVisible);
  console.log("isVisible = ", isVisible);
  const showWeatherArr = weathers.map((weather) => {
    return (
      <NavLink className="navLink" to={`/detailedforecast${weather.id}`}>
        <div onClick={handleVisibility}>
          {!isVisible && (
            <WeatherCard weather={weather} setWeather={setWeather} />
          )}
        </div>
      </NavLink>
    );
  });

  const routesArr = weathers.map((e) => (
    <Route
      element={
        <DetailedForecast
          state={e}
          isVisible={isVisible}
          handleVisibility={handleVisibility}
        />
      }
      path={`/detailedforecast${e.id}`}
    />
  ));

  return (
    <BrowserRouter>
      {showWeatherArr}
      <Routes>{routesArr}</Routes>
    </BrowserRouter>
  );
}
export default CardList;
