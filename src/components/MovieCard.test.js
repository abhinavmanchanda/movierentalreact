import React from 'react';
import {shallow} from 'enzyme';
import {MovieCard} from './MovieCard';
import CardHeader from '@material-ui/core/CardHeader';

describe("movie card header", () =>{
  const movie = {
    name: "Gunda",
    snippet: "Greatest movie of all time."
  };
  var shallowWrapper;
  beforeEach(() => {
    shallowWrapper = shallow(<MovieCard movie={movie}/>);
  })
  it("should contain a card header", () => {
    
  
    expect(shallowWrapper.find(CardHeader).exists()).toBe(true);
  });

  it("the card header should contain movie title.", () => {
    const cardHeaderWrapper = shallowWrapper.find(CardHeader);
    expect(cardHeaderWrapper.props().title).toEqual("Gunda");
  })

  it("the card header should contain movie subtitle.", () => {
    const cardHeaderWrapper = shallowWrapper.find(CardHeader);
    expect(cardHeaderWrapper.props().subheader).toEqual("Greatest movie of all time.");
  })
  
});

