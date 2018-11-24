import React, { Component } from 'react';
import { Button } from "react-bootstrap/lib";

import '../App.css';

class Editor extends Component {


  startMachine = () => {
    console.log('startMachine')
  }


  render() {
    const { startMachine, disabled } = this.props;

    return (
      <div>lorem ipsum</div>
    )
  }
}

export default Editor;
