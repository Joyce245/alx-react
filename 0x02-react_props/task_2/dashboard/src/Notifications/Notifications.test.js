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
    expect(wrapper.find('ul').children()).to.have.lengthOf(1);
		wrapper.find('ul').forEach((node) => {
			expect(node.equals(<NotificationItem />));
		});
  });

  it("<Notifications /> render the text 'Here is the list of notifications'", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).to.equal(true);
  });

});
