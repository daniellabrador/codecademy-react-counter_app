import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import renderer from 'react-test-renderer'

describe('App component', ()=>{
  it('starts with a count of 0', ()=>{
    const wrapper = shallow(<App />);
    const text = wrapper.find('p').text();

    expect(text).toEqual('Count: 0');
  })

  it('increments count by 1 when the increment button is clicked', ()=>{
    const wrapper = shallow(<App />);

    // Simulate button click
    const incrementBtn = wrapper.find('button.increment')
    incrementBtn.simulate('click')

    // Output
    const text = wrapper.find('p').text();

    expect(text).toEqual('Count: 1');
  })

  it('decrements count by 1 when the decrement button is clicked', ()=>{
    const wrapper = shallow(<App />)

    // Simulate button click
    const decrementBtn = wrapper.find('button.decrement');
    decrementBtn.simulate('click');

    // Result
    const expected = wrapper.find('p').text();

    // Test
    expect(expected).toEqual('Count: -1')
  })

  it('matches the snapshot',()=>{
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot();
  })
})