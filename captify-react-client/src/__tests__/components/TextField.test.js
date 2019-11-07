import React from 'react';
import { shallow } from 'enzyme';
import TextField from '../../components/TextField';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<TextField/>);
});

describe('<TextField - Component', () => {
  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toContainExactlyOneMatchingElement('form');
  });
});
