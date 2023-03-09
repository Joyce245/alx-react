import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import NotificationItem from './NotificationItem';

describe('NotificationItem renders', () => {
    it('NotificationItem renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists());
    });

    it('renders correct html from type="default" value="test" props', () => {
		const wrapper = shallow(<NotificationItem />);

		wrapper.setProps({ type: 'default', value: 'test' });
		expect(wrapper.html()).equal(
			'<li data-notification-type="default">test</li>'
		);
	});

    it('renders correct html from  html="<u>test</u>" props', () => {
		const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
		expect(wrapper.html()).equal('<li><u>test</u></li>');
	});
})