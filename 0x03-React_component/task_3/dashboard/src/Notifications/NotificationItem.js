import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {
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
				onClick={() => this.props.markAsRead(this.props.id)}>
				{this.props.value}
				</li>
				: null}

				{this.props.html ? (
					<li
					data-urgent dangerouslySetInnerHTML={{ __html: this.props.html }}
					></li>
				) : null}
			</React.Fragment>
		);
	}
};

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