import React from 'react';
import { Loc } from 'redux-react-i18n';
import appcss from 'styles/app.less';
import { Button } from 'react-bootstrap';

console.log(appcss)
class AppComponent extends React.Component {

  render() {
    return (
      <div className={appcss.index}>
        <div className={appcss.notice}>
          <Loc locKey="hello" />
          <p className={appcss.test}>ASDF</p>
          <Button bsStyle="primary">Test</Button>
          <span>11154654654645111111</span>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
