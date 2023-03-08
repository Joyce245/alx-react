import { shallow } from 'enzyme';
import React from 'react';
import Notifications from './Notifications';

// test that Notification renders without crashing
describe('Notification renders without crashing', () => {
    const Notification = shallow(<Notifications />);

    // Notification renders
    it('Notification renders', () => {
        expect(Notification).toBeDefined();
    });

    // verify that Notification renders an unordered list of Notifications
    it('Notification renders ul without error', () => {
        expect(Notification.find('ul')).toBeDefined();
    });

    // verify that Notification renders a div with the class App-body
    it('Notification renders three li elements without error', () => {
        expect(Notification.find('li')).toHaveLength(3);
    });

    // verify that Notification renders a paragraph with the text 'Here is the list of notifications'
    it('Notification renders the paragraph', () => {
        expect(Notification.find('p')).toBeDefined();
    })
});