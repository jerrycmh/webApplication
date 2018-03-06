import React from 'react';
import ReactDOM from 'react-dom';
import chatSystem from "./components/chatSystem";
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<chatSystem/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('chatSystem via Enzyme', () => {
    it('renders form and p',()=>{
        const wrapper = setup(false);
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h2').text()).toEqual('Chat');
        expect(wrapper.find('p').text()).toEqual(' Hi! My name is John, I\'m going to be your personal trainer. ');
        expect(wrapper.find('p').text()).toEqual('John is typing...');
    });

    let renderer = TestUtils.createRenderer();
    renderer.render(<chatSystem {...props}/>);
    let output = renderer.getRenderOutput();

    return{
        output
    };

    //it('')
});