import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header";
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('Header via Enzyme', () => {
    it('renders form',()=>{
        const wrapper = setup(false);
        //expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toEqual('Fat2Fit');
    });
});