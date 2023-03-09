import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

function CourseListRow(props) {

  const styleToUse = props.isHeader ? styles.rowBg : styles.headerRowBg
  if (props.isHeader) {
    if (props.textSecondCell == null) {
      return <tr className={css(styleToUse)}><th colSpan="2">{props.textFirstCell}</th></tr>
    } else {
      return (
        <tr className={css(styleToUse)}>
          <th>{props.textFirstCell}</th>
          <th>{props.textSecondCell}</th>
        </tr>
        )
    }
  } 
  return (
    <tr className={css(styleToUse)}>
      <td>{props.textFirstCell}</td>
      <td>{props.textSecondCell}</td>
    </tr>
  )
}
const styles = StyleSheet.create({
  headerRowBg: {
    backgroundColor: '#deb5b545'
  },
  rowBg: {
    backgroundColor: '#f5f5f5ab'
  }
})

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