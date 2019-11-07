import React from 'react';
import { shallow, mount } from 'enzyme';
import SimpleTable from '../../components/Table';

let wrapper;
const data =  ['1', '2'];

beforeEach(() => {
  wrapper = mount(<SimpleTable rows={data}/>);
});

describe('<Table - Component', () => {
  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveDisplayName('SimpleTable');
    expect(wrapper).toContainMatchingElement('tr');
    expect(wrapper).toContainMatchingElement('table');
    expect(wrapper).toContainMatchingElement('tbody');
    expect(wrapper).toContainMatchingElement('th');
  });
});
