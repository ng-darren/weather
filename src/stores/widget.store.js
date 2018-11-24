import { extendObservable } from 'mobx';
import { widgetService } from '../services';

export default class WidgetStore {
  constructor() {
    extendObservable(this, {
      title: '',
      isCelsius: true,
      isWindOn: true
    });

    navigator.geolocation.watchPosition(this.updateLocation, this.errorLocation);
  }

  updateWidget(key, value) {
    this[key] = value;
  }

  updateLocation(res) {
    console.log(res);

    let lat = res.coords.latitude, lng = res.coords.longitude;
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lng)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      )

  }

  errorLocation(err) {
    console.log(err);
  }
}
