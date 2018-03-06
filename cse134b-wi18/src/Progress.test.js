import React from 'react';
import ReactDOM from 'react-dom';
import Progress from "./components/Progress";
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Progress/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('Progress via Enzyme', () => {
    it('renders form and p',()=>{
        const wrapper = setup(false);
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toEqual('My Progress');
        expect(wrapper.find('h2').text()).toEqual('')
    });

    let renderer = TestUtils.createRenderer();
    renderer.render(<Progress {...props}/>);
    let output = renderer.getRenderOutput();

    return{
        output
    };

    //it('')
});