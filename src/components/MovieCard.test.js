import React from 'react';
import {shallow} from 'enzyme';
import {MovieCard} from './MovieCard';
import CardHeader from '@material-ui/core/CardHeader';

it("should render the movie title", () => {
  const movie = {
    title: "Gunda",
    snippet: "Greatest movie of all time."
  };
  let wrapper = shallow(<MovieCard movie={movie}/>);

  expect(wrapper.find(CardHeader).exists()).toBe(true);
});


