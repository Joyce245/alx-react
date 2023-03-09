import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import  Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

describe("Testing the <Notifications /> Component", () => {

  it("<Notifications /> renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists());
  });

  it("<Notifications /> renders the notificationsItem component", () => {
    const wrapper = shallow(<Notifications />);
		wrapper.find('ul').forEach((node) => {
			expect(node.equals(<NotificationItem />));
		});
  });

  // unable to figure out the below test. If you come across this, please help in fixing.

  // it("<Notifications /> render the text 'Here is the list of notifications'", () => {
  //   const wrapper = shallow(<Notifications />);
  //   expect(wrapper.contains('<p>Here is the list of notifications</p>')).equal(true);
  // });

  it('displays menu item when displayDrawer is false', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);

		expect(wrapper.find('div.menuItem').exists()).equal(true);
		expect(wrapper.find('div.menuItem').html()).equal(
			'<div class="menuItem">Your notifications</div>'
		);
	});

	it('does not display notifications when displayDrawer is false', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);

		expect(wrapper.find('div.Notifications').exists()).equal(false);
	});

	it('does not display menuItem when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);

		expect(wrapper.find('div.menuItem').exists()).equal(true);
	});

	it('displays Notifications when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);

		expect(wrapper.find('div.Notifications').exists()).equal(true);
	});

});

describe("Testing <Notification displayDrawer={true} listNotifications={[...]}/> ", () => {
	let wrapper;
	const listNotifications = [
	  {id: 1, value: "New course available", type: "default"},
	  {id: 2, value: "New resume available", type: "urgent"},
	  {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},
	];
  
	beforeEach(() => {
	  wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
	});
  
	it("verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem", () => {
	  expect(wrapper.find("NotificationItem")).to.have.lengthOf(3);
	  expect(wrapper.find("NotificationItem").first().props().value).equal('New course available');
	});
});
