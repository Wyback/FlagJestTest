import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

//You need to install those :
//npm i enzyme enzyme-adapter-react-16 --dev
//To execute the tests :
//npm run test


describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render Title', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('h1').at(0).text();
    expect(text).toEqual('Flag Picker');
  });

  it('render Continent', () => {
    const wrapper = shallow(<App />);
    const inputSelect = wrapper.find('input.step-input').at(0);
    inputSelect.simulate('focus');
    const text = wrapper.find('li').at(0).text();
    expect(text).toEqual('Africa');
    const button1 = wrapper.find('li').at(0);
    button1.simulate('click');
    const contname = wrapper.find('h1').at(2).text();
    expect(contname).toEqual('Africa');
  });

  it('render Country', () => {
    const wrapper = shallow(<App />);
    const inputContinent = wrapper.find('input.step-input').at(0);
    //open list step 1
    inputContinent.simulate('focus');
    const buttonContinent = wrapper.find('li').at(0);
    //select continent
    buttonContinent.simulate('click');
    const inputCountry = wrapper.find('input').at(1);
    //open list step 2
    inputCountry.simulate('focus');
    const country = wrapper.find('label').at(0).text();
    expect(country).toEqual('Nigeria');
  });

  it('render Flag', () => {
    const wrapper = shallow(<App />);
    const inputContinent = wrapper.find('input.step-input').at(0);
    //open list step 1
    inputContinent.simulate('focus');
    const buttonContinent = wrapper.find('li').at(0);
    //click continent
    buttonContinent.simulate('click');
    const inputCountry = wrapper.find('input.step-input').at(1);
    //open list step 2
    inputCountry.simulate('focus');
    const country = wrapper.find('input').at(2);
    //select checkbox country
    country.simulate('click', {"target":{"value":'Nigeria'}});
    //check flag
    const flag = wrapper.find('p.flag');
    //the flag is displayed
    expect(wrapper.find('p.flag')).toHaveLength(0);
  });

  it('clear Flag', () => {
    const wrapper = shallow(<App />);
    const inputContinent = wrapper.find('input.step-input').at(0);
    //open list step 1
    inputContinent.simulate('focus');
    const buttonContinent = wrapper.find('li').at(0);
    //click continent
    buttonContinent.simulate('click');
    const inputCountry = wrapper.find('input.step-input').at(1);
    //open list step 2
    inputCountry.simulate('focus');
    const country = wrapper.find('input').at(2);
    //select checkbox country
    country.simulate('click', {"target":{"value":'Nigeria'}});
    //select button clear
    const clear = wrapper.find('button');
    clear.simulate('click');
    //the country list is not displayed anymore
    expect(country).toHaveLength(1);
  });

});
