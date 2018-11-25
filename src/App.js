import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { Button } from 'react-bootstrap';

import Editor from './components/editor.component'
import Widget from './components/widget.component'
import stores from './stores';

import './App.css';

class App extends Component {
  render() {

    return (
      <Provider stores={stores}>
        <div className="App-header">
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
        </div>
      </Provider>
    );
  }
}

export default App;
