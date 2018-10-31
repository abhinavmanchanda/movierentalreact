import React from 'react';
import {shallow} from 'enzyme';
import {MovieCard} from './MovieCard';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { ReserveButton } from './ReserveButton';

describe("movie card header", () =>{
  const movie = {
    name: "Gunda",
    snippet: "Greatest movie of all time.",
    imageUrl: 'fake url',
    reserved: true
  };
  var shallowWrapper;
  beforeEach(() => {
    shallowWrapper = shallow(<MovieCard movie={movie}/>);
  })
  it("should contain a card header", () => {
    expect(shallowWrapper.find(CardHeader).exists()).toBe(true);
  });

  it("the card media should contain the url", () => {
    const cardMediaWrapper = shallowWrapper.find(CardMedia);
    expect(cardMediaWrapper.props().image).toEqual("fake url");
  })

  it("the card header should contain movie title.", () => {
    const cardHeaderWrapper = shallowWrapper.find(CardHeader);
    expect(cardHeaderWrapper.props().title).toEqual("Gunda");
  })

  it("the card header should contain movie subtitle.", () => {
    const cardHeaderWrapper = shallowWrapper.find(CardHeader);
    expect(cardHeaderWrapper.props().subheader).toEqual("Greatest movie of all time.");
  })
  
  it("should send reserved flag to the reserve button", () => {
    const cardHeaderWrapper = shallowWrapper.find(ReserveButton);
    expect(cardHeaderWrapper.props().reserved).toEqual(true);
  })
  
});

