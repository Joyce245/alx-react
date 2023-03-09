import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow(props) {
  const rowBg = {backgroundColor: '#f5f5f5ab'}
  const headerRowBg = {backgroundColor: '#deb5b545'}
  const styleToUse = props.isHeader ? rowBg : headerRowBg
  if (props.isHeader) {
    if (props.textSecondCell == null) {
      return <tr style={styleToUse}><th colSpan="2">{props.textFirstCell}</th></tr>
    } else {
      return (
        <tr style={styleToUse}>
          <th>{props.textFirstCell}</th>
          <th>{props.textSecondCell}</th>
        </tr>
        )
    }
  } 
  return (
    <tr style={styleToUse}>
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