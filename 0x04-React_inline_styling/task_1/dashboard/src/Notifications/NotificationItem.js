import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite/no-important';

class NotificationItem extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				{
				this.props.type && this.props.value
				? <li 
				data-notification-type={this.props.type}
				onClick={() => this.props.markAsRead(this.props.id)} className={css(styles.l
				)}>
				{this.props.value}
				</li>
				: null}

				{this.props.html ? (
					<li
					data-urgent dangerouslySetInnerHTML={{ __html: this.props.html }} className={css(styles.li)}
					></li>
				) : null}
			</React.Fragment>
		);
	}
};

const styles = StyleSheet.create({
	li: {
	  ':nth-child(3)': {
		color: '#3a3a3a'
	  }
	}
  })

NotificationItem.propTypes = {
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
	__html: PropTypes.shape({
		html: PropTypes.string,
	}),
	markAsRead: PropTypes.func,
	id: PropTypes.number
};

NotificationItem.defaultProps = {
	type: 'default',
	id: 0,
};

export default NotificationItem;