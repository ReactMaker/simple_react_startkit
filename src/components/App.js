import React from 'react';
import YeomanImage from './YeomanImage';
import appcss from './app.css';

class AppComponent extends React.Component {

  render() {
    return (
      <div className={appcss.index}>
        <YeomanImage />
        <div className={appcss.notice}>
          Please edit <code>src/components/App.js</code> to get started!
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
