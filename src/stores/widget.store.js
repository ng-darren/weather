import { extendObservable } from 'mobx';
import widgetService from '../services';

export default class WidgetStore {
  constructor() {
    extendObservable(this, {
      title: '',
      isCelsius: 'true',
      isWindOn: 'true',
      lat: 0,
      lng: 0,
      report: {},
      isError: ''
    });

    navigator.geolocation.watchPosition(this.updateReport, this.errorLocation);
  }

  updateWidget(key, value) {
    this[key] = value;

    if (key !== 'title') {
      this.updateReport();
    }
  }

  updateReport = (res) => {
    if (res) {
      this.lat = res.coords.latitude;
      this.lng = res.coords.longitude;
    }

    this.isError = '';

    widgetService.fetchWeatherReport(this.lat, this.lng, this.isCelsius)
      .then(res => res.json())
      .then(
        (result) => {
          this.report = result;
        },
        (error) => {
          this.isError = 'Failed to fetch weather report.';
        }
      )
  }

  errorLocation(err) {
    this.isError = 'Error in getting location.';
  }
}
