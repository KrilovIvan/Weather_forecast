import React from "react";
import axios from "axios";
import CardList from "../CardList/CardList";

const APIContainer = () => {
  let url = "http://localhost:3001/";

  let weatherConditionInterpreter = (key) => {
    switch (key) {
      case "clear":
        return "ясно";
      case "partly-cloudy":
        return "малооблачно";
      case "cloudy":
        return "облачно с прояснениями";
      case "overcast":
        return "пасмурно";
      case "drizzle":
        return "морось";
      case "light-rain":
        return "небольшой дождь";
      case "rain":
        return "дождь";
      case "moderate-rain":
        return "умеренно сильный дождь";
      case "heavy-rain":
        return "сильный дождь";
      case "continuous-heavy-rain":
        return "длительный сильный дождь";
      case "showers":
        return "ливень";
      case "wet-snow":
        return "дождь со снегом";
      case "light-snow":
        return "небольшой снег";
      case "snow":
        return "снег";
      case "snow-showers":
        return "снегопад";
      case "hail":
        return "град";
      case "thunderstorm":
        return "гроза";
      case "thunderstorm-with-rain":
        return "дождь с грозой";
      case "thunderstorm-with-hail":
        return "гроза с градом";
      default:
        return key;
    }
  };

  const [requestData, setRequestData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log("response:");
        console.log(response);
        setRequestData([
          {
            id: Math.floor(Math.random() * 98),
            city:
              response.data.geo_object.locality != null
                ? response.data.geo_object.locality.name +
                  ", " +
                  response.data.geo_object.province.name
                : response.data.geo_object.country.name +
                  ", Город не определен",
            roundedTemp: response.data.forecasts[0].parts.day.temp_avg,
            feelsTemp: response.data.fact.feels_like,
            totalDescription: weatherConditionInterpreter(
              response.data.fact.condition
            ),
            hourlyTemp: response.data.forecasts[0].hours.map((elem) => {
              return {
                time: elem.hour + ":00",
                temp: elem.temp,
                description: weatherConditionInterpreter(elem.condition),
              };
            }),
            wind: response.data.fact.wind_speed + "м/c",
            humidity: response.data.fact.humidity,
            pressure: response.data.fact.pressure_mm,
          },
        ]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>{console.log("d", requestData)}</div>
      {requestData.length && (
        <CardList weathers={requestData} setWeathers={setRequestData} />
      )}
    </div>
  );
};

export default APIContainer;
