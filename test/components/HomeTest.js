import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Home from 'containers/Home/';

const mockStore = configureStore();
const dispatch = sinon.spy();

describe('<Home />', function () {

  beforeEach(function () {
    this.component = shallow(<Home dispatch={dispatch} store={mockStore({ runtime: {} })} />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "index"', function () {

      expect(this.component.hasClass('index')).to.equal(true);
    });
  });
});
