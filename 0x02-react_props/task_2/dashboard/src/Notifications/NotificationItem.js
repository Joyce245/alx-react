import React from 'react';
import './Notifications.css';

export default function (props) {
    return (
        <li data-notification-type={props.type} dangerouslySetInnerHTML={props.html}>
            {props.value}
        </li>
    )
}