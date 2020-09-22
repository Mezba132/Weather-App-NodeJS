const API_CONFIG = {
  baseUrl : "https://api.openweathermap.org/data/2.5/weather",
  appKey  : "a5f490d51fc479a6f031e33819698f78",
  units: "metric",
  getCompleteUrl : ( function(city) {
    return `${API_CONFIG.baseUrl}?q=${city}&appid=${API_CONFIG.appKey}&units=${API_CONFIG.units}`
  })
}

module.exports.API_CONFIG = API_CONFIG;
