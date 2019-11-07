import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../components/layouts/Header';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Header/>);
});

describe('<Header> - Component', () => {
  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toIncludeText('There is data from DB')
  });
});
