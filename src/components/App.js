import React from 'react';
import { Loc } from 'redux-react-i18n';
import { Button } from 'reactstrap';
import 'srcStyles/app.less';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <div className="notice">
          <Loc locKey="hello" />
          <p className="test">ASDF</p>
          <Button>Test</Button>
          <span>11154654654645111111</span>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
