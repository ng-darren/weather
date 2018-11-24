import React, { Component } from 'react';
import { Button } from "react-bootstrap/lib";

import '../App.css';

class Widget extends Component {


  startMachine = () => {
    console.log('startMachine')
  }


  render() {
    const { startMachine, disabled } = this.props;

    return (
      <div className="card" style={{width: '18rem', boxShadow: '3px 3px 8px #bbbbbb'}}>
        <div className="card-body">
          <h5 className="card-title">Title of the Widget</h5>
          <p className="card-text">lorem ipsum</p>
        </div>
      </div>
    )
  }
}

export default Widget;
