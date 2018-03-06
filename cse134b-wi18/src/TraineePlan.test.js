import React from 'react';
import ReactDOM from 'react-dom';
import TraineePlan from "./components/TraineePlan";
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TraineePlan/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('TraineePlan via Enzyme', () => {
    it('renders form, h2 and label',()=>{
        const wrapper = setup(false);
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h2').text()).toEqual('Welcome Trainee! Make A Detailed Plan For Yourself!');
        expect(wrapper.find('label').text()).toEqual('Create an Account');
        expect(wrapper.find('label').text()).toEqual('Target Date');
        expect(wrapper.find('label').text()).toEqual('Exercise Frequency');
        expect(wrapper.find('label').text()).toEqual('Calorie Cap');
        expect(wrapper.find('label').text()).toEqual('Exercise Plan:');
        expect(wrapper.find('label').text()).toEqual('Exercise Plan:');

    });

    let renderer = TestUtils.createRenderer();
    renderer.render(<TraineePlan {...props}/>);
    let output = renderer.getRenderOutput();

    return{
        output
    };

    //it('')
});