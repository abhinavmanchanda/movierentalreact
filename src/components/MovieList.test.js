import React from 'react';
import {shallow} from 'enzyme';
import {MovieCard} from './MovieCard';
import {MovieList} from './MovieList';

describe("Movie List", () =>{
  var mockReserveFunction;
  const movies = [{
      name: "Gunda",
      snippet: "Greatest movie of all time.",
      imageUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50_.jpg"
    },{
      name: "Tabaahi - The Destroyer",
      snippet: "Don't awaken his dark side.",
      imageUrl:"https://images-na.ssl-images-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL50_SY1000_CR0,0,649,1000_AL_.jpg"
    }
  ];
  var shallowWrapper;
  beforeEach(() => {
    mockReserveFunction = jest.fn();
    shallowWrapper = shallow(<MovieList movies={movies} reserveMovie={mockReserveFunction}/>);
  })

  it("should contain a list of movie cards", () => {
    expect(shallowWrapper.find(MovieCard).length).toEqual(2);
  });

  it("should send reserve movie function for that movie", () => {
    expect(shallowWrapper.find(MovieCard).length).toEqual(2);
    shallowWrapper.find(MovieCard).at(1).props().onReserve()
    expect(mockReserveFunction.mock.calls.length).toEqual(1)
    expect(mockReserveFunction.mock.calls[0][0]).toEqual("Tabaahi - The Destroyer")

  });

});

