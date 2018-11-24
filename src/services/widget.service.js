export default class WidgetService {

  fetchWeatherReport = (lat, lng, units) => {
    // For temperature in Fahrenheit use units=imperial
    // For temperature in Celsius use units=metric
    let u = units === 'true'? 'metric' : 'imperial'
    return fetch('https://api.openweathermap.org/data/2.5/weather?appid=85c485f7f26106f11a8083a4452c98a5&lat=' + lat + '&lon=' + lng + '&units=' + u)
  }

}
