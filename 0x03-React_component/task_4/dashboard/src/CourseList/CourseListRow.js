import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow(props) {
  if (props.isHeader) {
    if (props.textSecondCell == null) {
      return <tr><th colSpan="2">{props.textFirstCell}</th></tr>
    } else {
      return (
        <tr>
          <th>{props.textFirstCell}</th>
          <th>{props.textSecondCell}</th>
        </tr>
        )
    }
  } 
  return (
    <tr>
      <td>{props.textFirstCell}</td>
      <td>{props.textSecondCell}</td>
    </tr>
  )
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default CourseListRow