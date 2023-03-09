import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from './Header';

describe('Header', () => {
    it('Header renders without crashing', () => {
        const headerWrapper = shallow(<Header />);
        expect(headerWrapper.exists());
    })
    it('Header should render an h1 and an img tag', () => {
        const headerWrapper = shallow(<Header />);
        expect(headerWrapper.exists('img')).equal(true);
        expect(headerWrapper.containsMatchingElement(<h1>School dashboard</h1>)).equal(true);
    });
});