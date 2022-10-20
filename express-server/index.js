const express = require("express");
const cors = require("cors");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();

app.use(cors({origin: true, credentials: true}));

app.get("/", (req, res) => {
  fetch(
    "https://api.weather.yandex.ru/v2/forecast?lat=47.751076&lon=-120.740135&lang='ru_RU'&limit=1&extra=true",
    { headers: { "X-Yandex-API-Key": "e71cd278-6f1d-410f-b1ab-e282b7e321d8" } }
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      res.send(data);
    });
});

app.listen(3001, () => {
  console.log("Application listening on port 3001!");
});
