import { extendObservable } from 'mobx'

export default class WidgetStore {
  constructor() {
    extendObservable(this, {
      title: '',
      isCelsius: true,
      isWindOn: true
    })
  }

  updateWidget(key, value) {
    this[key] = value;
  }
}
