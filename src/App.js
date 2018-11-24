import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import Editor from './components/editor.component'
import Widget from './components/widget.component'


import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <div className="row">
              <div className="col" style={{borderRight:'1px solid #cccccc', height:'300px'}}>
                <Editor />
              </div>
              <div className="col">
                <Widget />
              </div>
            </div>
          </div>

        </header>
      </div>
    );
  }
}

export default App;
