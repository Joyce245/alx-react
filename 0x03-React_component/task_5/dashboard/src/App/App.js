import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';


class App extends React.Component {
  state = {
    listCourses: [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit:40}
    ],
    listNotifications: [
      {id: 1, type: 'default', value: 'New course available'},
      {id: 2, type: 'urgent', value: 'New resume available'},
      {id: 3, type: 'urgent', html: getLatestNotification()}
    ]
  }

  constructor(props) {
    super(props);
    this.isLoggedIn = props.isLoggedIn;
    this.logOut = props.logOut;
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    if (typeof window !== 'undefined'){
      window.addEventListener('keydown', this.handleKeyDown);
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined'){
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  }
  
  handleKeyDown(event) {
    event.preventDefault();
    if(event.key === 'h' && event.ctrlKey) {
      alert('Logging you out');
      this.logOut();
    }
  }

  render() {
    return (
      <React.Fragment>
        <Notifications listNotifications={this.state.listNotifications}/>
        <div className="App">
          <Header />
          {this.props.isLoggedIn ?
            <BodySectionWithMarginBottom title="Course list"><CourseList listCourses={this.state.listCourses}/></BodySectionWithMarginBottom>
          : 
            <BodySectionWithMarginBottom title="Log in to continue"><Login /></BodySectionWithMarginBottom>
          }
          <BodySection title="News from the School">
            <p>Hello world!</p>
          </BodySection>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut() {
    return;
  }
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;