import React from 'react';
import ReactDOM from 'react-dom';
import CreateAccount from "./components/CreateAccount";
import App from './index';
import renderer from 'react-test-renderer';

// TODO: kevin hwang use this as a template for tests

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateAccount/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('CreateAccount via Enzyme', () => {
  it('renders form and p',()=>{
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('p').text()).toEqual('Create an Account');
  });

  //it('')
});