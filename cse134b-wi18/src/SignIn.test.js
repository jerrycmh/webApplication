import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from "./components/SignIn";
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SignIn/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('SignIn via Enzyme', () => {
    it('renders form ',()=>{
        const wrapper = setup(false);
        expect(wrapper.find('form').length).toBe(1);
        //expect(wrapper.find('p').text()).toEqual('Create an Account');
    });

    //it('')

    let renderer = TestUtils.createRenderer();
    renderer.render(<SignIn {...props}/>);
    let output = renderer.getRenderOutput();

    return{
        output
    };

});