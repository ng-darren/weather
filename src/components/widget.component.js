import React, { Component } from 'react';
import { compose } from 'recompose';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

import '../App.css';

class Widget extends Component {


  startMachine = () => {
    console.log('startMachine')
  }


  render() {
    const { title, isCelsius, isWindOn } = this.props.stores.widget;

    return (
      <div className="card" style={{width: '18rem', boxShadow: '3px 3px 8px #bbbbbb'}}>
        <div className="card-body">
          <strong className="card-title">{title? title  : 'Title of the Widget'}</strong>

          <br />
          isCelsius: {isCelsius}, isWindOn: {isWindOn}
        </div>
      </div>
    )
  }
}

export default compose(inject('stores'), observer)(Widget);
