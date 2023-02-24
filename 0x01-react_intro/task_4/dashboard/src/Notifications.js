import React from 'react';
import close from'./close-icon.svg'
import './Notifications.css';
import { getLatestNotification } from './utils';

function notification() {

    return (
        <div className="Notifications">
            <p>
                Here is the list of notifications
            </p>
            <button aria-label='Close' onClick={console.log('Close button has been clicked')} style={{float: "right", border: 'none', background: 'transparent', position: 'absolute', right: '2em', top: '2em'}}>
                <img src={close} alt='close-btn' style={{width: '15px', height: '20px', top: 0}}/>
            </button>
            <ul>
                <li data="default">New course available</li>
                <li data="urgent">New resume available</li>
                <li data='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
				></li>
            </ul>
        </div>
    )
}

export default notification;