const express = require("express");
const app = express();

const mainController = require('./Controller/cityWeather');
app.use(mainController);

app.listen(3000, () => console.log("Server is running at port 3000"));
