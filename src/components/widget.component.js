import React, { Component } from 'react';
import { compose } from 'recompose';
import { observer, inject } from 'mobx-react';

import '../App.css';

class Widget extends Component {


  startMachine = () => {
    console.log('startMachine')
  }


  render() {
    const { title, isCelsius, isWindOn, report } = this.props.stores.widget;

    return (
      <div className="card" style={{boxShadow: '3px 3px 8px #bbbbbb'}}>
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col">
                <strong className="card-title">{title? title  : 'Title of the Widget'}</strong>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h1>
                  <i className="fas fa-cloud-sun-rain"></i>
                  <i className="fas fa-cloud-sun"></i>
                  <i className="fas fa-cloud-showers-heavy"></i>
                  <i className="fas fa-cloud-rain"></i>
                  <i className="fas fa-cloud-moon-rain"></i>
                  <i className="fas fa-cloud-moon"></i>
                  <i className="fas fa-cloud-sun"></i>
                  <i className="fas fa-cloud-sun-rain"></i>
                </h1>
              </div>
              <div className="col">
                <h1>{report.name}</h1>
                  isCelsius: {isCelsius}, isWindOn: {isWindOn}

                  {report.main? report.main.temp : 0}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default compose(inject('stores'), observer)(Widget);
