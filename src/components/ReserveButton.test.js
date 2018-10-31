import React from 'react';
import {shallow} from 'enzyme';
import { ReserveButton } from './ReserveButton';
import Button from '@material-ui/core/Button';

describe("Reserve Button", () => {

  const verifyText = (componentToRender, text) => {
    const shallowWrapper = shallow(componentToRender);
    expect(shallowWrapper.find(Button).props().children).toEqual(text)
  }

  it("gives the option to return when movie is reserved", () => {
    verifyText(<ReserveButton reserved={true}/>, "Return")
  })

  it("gives the option to reserve when movie is not reserved", () => {
    verifyText(<ReserveButton reserved={false}/>, "Reserve")
  })

  it("gives the option to reserve when reserve flag is not passed", () => {
    verifyText(<ReserveButton/>, "Reserve")
  })
})