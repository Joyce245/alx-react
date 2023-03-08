import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

// test that App renders without crashing
describe('App renders without crashing', () => {
    const app = shallow(<App />);

    // App renders
    it('App renders', () => {
        expect(app).toBeDefined();
    });

    // verify that App renders a div with the class App-header
    it('App-header renders without errors', () => {
        expect(app.find('App-header')).toBeDefined();
    });

    // verify that App renders a div with the class App-body
    it('App-body renders without errors', () => {
        expect(app.find('App-body')).toBeDefined();
    });

    // verify that App renders a div with the class App-footer
    it('App-footer renders without errors', () => {
        expect(app.find('App-footer')).toBeDefined();
    });
});