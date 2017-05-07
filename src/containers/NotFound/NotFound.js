import React, { Component } from 'react';
import './NotFound.less';

export default class NotFound extends Component {

  render() {
    return (
      <div className="page404">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <h3 className="text-center">{'The page you\'re looking for could not be found.'}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
