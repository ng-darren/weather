import React, { Component } from 'react';
import { compose } from 'recompose';
import { observer, inject } from 'mobx-react';

import '../App.css';

class Editor extends Component {
  handleChange = (event) => {
    const { widget } = this.props.stores;
    widget.updateWidget(event.target.name, event.target.value);
  }

  render() {
    const { title } = this.props.stores.widget;
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" className="form-control" aria-describedby="Title of widget" placeholder="Title of widget" value={title} onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <label>Temperature</label>
            <br />
            <div className="custom-control custom-radio custom-control-inline">
              <input type="radio" id="celsius" name="isCelsius" className="custom-control-input" value={true} onChange={this.handleChange} />
              <label className="custom-control-label" htmlFor="celsius">&#8451;</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input type="radio" id="farenheit" name="isCelsius" className="custom-control-input" value={false} onChange={this.handleChange}/>
              <label className="custom-control-label" htmlFor="farenheit">&#8457;</label>
            </div>
          </div>

          <div className="form-group">
            <label>Wind</label>
            <br />
            <div className="custom-control custom-radio custom-control-inline">
              <input type="radio" id="on" name="isWindOn" className="custom-control-input" value={true} onChange={this.handleChange} />
              <label className="custom-control-label" htmlFor="on">On</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input type="radio" id="off" name="isWindOn" className="custom-control-input" value={false} onChange={this.handleChange} />
              <label className="custom-control-label" htmlFor="off">Off</label>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default compose(inject('stores'), observer)(Editor);
