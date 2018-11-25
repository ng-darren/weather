import React, { Component } from 'react';
import { compose } from 'recompose';
import { observer, inject } from 'mobx-react';

import '../App.css';

class Widget extends Component {
  degToCompass = (num) => {
    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
  }

  getIcon = (id) => {
    let imgUrl = './assets/unknown.png';

    switch(true) {
      case (id === 800):
        const { report } = this.props.stores.widget;
        imgUrl = report.weather[0].icon === '01d'? './assets/sun.png' : './assets/moon.png';
        break;
      case (id === 804):
        imgUrl = './assets/two-cloud.png';
        break;
      case (id > 800):
        imgUrl = './assets/cloud-sun.png';
        break;
      case (id > 700):
        imgUrl = './assets/dark-cloud.png';
        break;
      case (id > 500):
        imgUrl = './assets/rain.png';
        break;
      case (id > 300):
        imgUrl = './assets/cloud-rain-sun.png';
        break;
      case (id > 200):
        imgUrl = './assets/lightning-rain.png';
        break;
      default:
        imgUrl = './assets/unknown.png';
    }

    return imgUrl;
  }

  render() {
    const { title, isCelsius, isWindOn, report } = this.props.stores.widget;

    return (
      <div className="card" style={{boxShadow: '3px 3px 8px #bbbbbb'}}>
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col">
                <strong className="title">{title? title  : 'TITLE OF WIDGET'}</strong>
              </div>
            </div>
            <div className="row">
              <div className="col">
              {report.weather && <img src={this.getIcon(report.weather[0].id)} alt="Sunny" style={{maxWidth: '100%'}}/> }
              </div>
              <div className="col">
                <p className="name">{report.name}</p>
                <h1 className="temperature">{report.main? Math.round(report.main.temp) : 0}&#176;</h1>

                {isWindOn && report.wind && <p className="wind"><strong className="extra-bold">Wind</strong> <span className="small"> {this.degToCompass(report.wind.deg)} {report.wind.speed}{isCelsius === 'true'? 'km/h' : 'm/h'}</span></p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default compose(inject('stores'), observer)(Widget);
