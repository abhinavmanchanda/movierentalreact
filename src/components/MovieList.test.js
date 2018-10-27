import React from 'react';
import {shallow} from 'enzyme';
import {MovieCard} from './MovieCard';
import {MovieList} from './MovieList';

describe("Movie List", () =>{
  const movies = [{
      name: "Gunda",
      snippet: "Greatest movie of all time."
    },{
      name: "Tabaahi - The Destroyer",
      snippet: "Don't awaken his dark side."
    }
  ];
  var shallowWrapper;
  beforeEach(() => {
    shallowWrapper = shallow(<MovieList movies={movies}/>);
  })

  it("should contain a list of movie cards", () => {
    expect(shallowWrapper.find(MovieCard).length).toEqual(2);
  });

});

