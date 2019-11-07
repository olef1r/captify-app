import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Button';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Button/>);
});

describe('<Button> - Component', () => {
  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
