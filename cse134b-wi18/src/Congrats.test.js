import React from 'react';
import ReactDOM from 'react-dom';
import { Congrats } from "./components/Congrats";
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Congrats/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('Congrats via Enzyme', () => {
    it('renders p',()=>{
        const wrapper = mount(<Congrats />);
        //expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('p').text()).toEqual('Congratulations!');
    });

});