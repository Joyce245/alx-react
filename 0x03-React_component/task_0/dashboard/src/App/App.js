import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';


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
  
  render() {
    return (
      <React.Fragment>
        <Notifications listNotifications={this.state.listNotifications}/>
        <div className="App">
          <Header />
          {this.props.isLoggedIn ? <CourseList listCourses={this.state.listCourses}/> : <Login />}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default App;