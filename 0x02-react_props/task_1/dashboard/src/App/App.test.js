import { shallow } from 'enzyme';
import App from './App';
import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

describe('Test App.js', () => {
  it('App without crashing', (done) => {
    expect(shallow(<App />).exists());
    done();
  });

  it('div with the class App-header', (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<header className='App-header' />))
    done()
  });

  it('div with the class App-body', (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<body className='App-body' />))
    done();
  });

  it('div with the class App-footer', (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<footer className='App-footer' />))
    done();
  });

  it('App contains the notifications component', () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.containsMatchingElement(<Notifications />, <Header />, <Footer />, <Login />)).toBe(true);
  })
});