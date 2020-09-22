const express = require("express"),
      https   = require("https"),
      bodyParser = require("body-parser"),
      apiConfig = require("../AppConfig.js").API_CONFIG;

const app = express();
app.use(bodyParser.urlencoded({extended : true }));


app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/index.html");
});

app.post("/", (req, res) => {
  let city = req.body.cityname;
  const url = apiConfig.getCompleteUrl(city);
  console.log(process.cwd());
  https.get(url, (response) => {
    // console.log(response.statusCode);
    response.on("data", (data) => {
      //console.log(JSON.parse(data));
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp
      const wind = weatherData.wind.speed
      const description = weatherData.weather[0].description
      const icon = weatherData.weather[0].icon
      const imgUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

      console.log("Temp : " + temp + " , " + " Wind : " + wind + " , " + " Description : " + description);
      res.write("<h1> Temperature in " + city + " is " + temp + " Deg Celcius</h1>");
      res.write("<h3> Wind's Speed : " + wind + " per hour </h3>")
      res.write("<h3> Current Situation : " + description + "</p>")
      res.write("<img src=" + imgUrl + ">");
      res.send();

      // const stringifyObj = {
      //   name : "mezba",
      //   bday : "181294",
      //   home : "Dhaka"
      // }
      // console.log(JSON.stringify(stringifyObj));

    });
  });
});

module.exports = app;
