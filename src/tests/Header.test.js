import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Header from '../components/Header';

it('has an h1 element', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('h1').text()).toEqual('The Shop!');
});
