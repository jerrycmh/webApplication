import React from 'react';
import ReactDOM from 'react-dom';
import TraineeInfo from "./components/TraineeInfo";
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TraineeInfo/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('TraineeInfo via Enzyme', () => {
    it('renders form and p',()=>{
        const wrapper = setup(false);
        expect(wrapper.find('form').length).toBe(1);
        //expect(wrapper.find('p').text()).toEqual('Create an Account');
    });

    let renderer = TestUtils.createRenderer();
    renderer.render(<TraineeInfo {...props}/>);
    let output = renderer.getRenderOutput();

    return{
        output
    };

    //it('')
});