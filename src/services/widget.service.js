export default class WidgetService {

  fetchWeatherReport = (lat, lon) => fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}')

}
