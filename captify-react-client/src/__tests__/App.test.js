import React from 'react';
import App from '../App';

import { shallow } from 'enzyme';


let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});
describe('<App> - Component', () => { 

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveDisplayName('div');
  });

  it('renders components', () => {
    expect(wrapper).toContainExactlyOneMatchingElement('OutlinedButtons');
    expect(wrapper).toContainExactlyOneMatchingElement('SimpleTable');
    expect(wrapper).toContainExactlyOneMatchingElement('BasicTextFields');
  });
});
