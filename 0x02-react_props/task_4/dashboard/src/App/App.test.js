import { shallow } from 'enzyme';
import App from './App';
import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

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
  });

  it('App does not render course list if logged out', () => {
    const appWrapper = shallow(<App/>);
    appWrapper.setProps({ isLoggedIn: false })
    expect(appWrapper.contains(<CourseList />)).toBe(false);
  });

  // When isLoggedIn is true, and add two checks. The first one should verify that the Login component is not included. The second one should verify that the CourseList component is included
  it('App does not render courselist if logged out', () => {
		const appWrapper = shallow(<App />);
		appWrapper.setProps({ isLogedIn: false });
		expect(appWrapper.contains(<CourseList />)).toBe(false);
  });

  it('App renders courselist if logged in', () => {
    const appWrapper = shallow(<App />);
    appWrapper.setProps({ isLoggedIn: true });
    expect(appWrapper.contains(<CourseList />)).toBe(true);
    expect(appWrapper.contains(<Login />)).toBe(false);
  })
});