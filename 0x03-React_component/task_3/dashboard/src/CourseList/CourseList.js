import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import propTypes from 'prop-types';
import CourseShape from './CourseShape';

function CourseList({ listCourses }) {
    return (
        <table id="CourseList">
          <thead>
            <CourseListRow isHeader={true} textFirstCell='Available courses' />
            <CourseListRow isHeader={true} textFirstCell='Course name' textSecondCell="Credit" />
          </thead>
          <tbody>
          { listCourses.length == 0 ? <CourseListRow isHeader={false} textFirstCell='No course available yet'/> : null
          }
          { listCourses.map((val, idx) => {
            return <CourseListRow isHeader={false} textFirstCell={val.name} textSecondCell={val.credit} key={val.id}/>
          })
          }
          </tbody>
        </table>
      );
}

// I'll come back to you!!!!

// const Course = (listCourses) => {
//   if (listCourses.length === 0) {
//     return (
//       <tbody>No course available yet</tbody>
//     )
//   } else {
//     return (
//       listCourses.map((value, index) => {
//         <CourseListRow isHeader={false} textFirstCell={value.name} textSecondCell={value.crdit} key={value.id}/>
//       })
//     )
//   }
// }

CourseList.propTypes = {
  listCourses: propTypes.arrayOf(CourseShape)
}

CourseList.defaultProps = {
  listCourses: [],
}

export default CourseList;