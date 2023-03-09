import React from 'react';
import './Notifications.css';
import propTypes from 'prop-types';

export default function NotificationItem (props) {
    return (
        <li data-notification-type={props.type} dangerouslySetInnerHTML={props.html}>
            {props.value}
        </li>
    )
}

NotificationItem.propTypes = {
    type: propTypes.string.isRequired,
    value: propTypes.string,
    __html: propTypes.shape({ html: propTypes.string })
}

NotificationItem.defaultProps = {
    type: 'default',
}