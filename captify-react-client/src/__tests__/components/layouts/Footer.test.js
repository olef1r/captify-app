import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../../components/layouts/Footer';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Footer/>);
});

describe('<Footer> - Component', () => {
  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toIncludeText('Footer')
  });
});