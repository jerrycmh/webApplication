import React from 'react';
import ReactDOM from 'react-dom';
import PaymentInfo from "./components/PaymentInfo";
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PaymentInfo/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('PaymentInfo via Enzyme', () => {
    it('renders form, legend and label',()=>{
        const wrapper = setup(false);
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('legend').text()).toEqual('Card Information');
        expect(wrapper.find('label').text()).toEqual('Expiration Date');
    });

    let renderer = TestUtils.createRenderer();
    renderer.render(<PaymentInfo {...props}/>);
    let output = renderer.getRenderOutput();

    return{
        output
    };

    //it('')
});