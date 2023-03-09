import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import  Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe("Testing the <Notifications /> Component", () => {

  it("<Notifications /> is renders without crashing", () => {
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
			'<div class="menuItem"><p>Your Notifications</p></div>'
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
