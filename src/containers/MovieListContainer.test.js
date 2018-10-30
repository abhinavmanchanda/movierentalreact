import React from 'react';
import { shallow } from 'enzyme';
import MovieListContainer from './MovieListContainer';
import { MovieList } from '../components/MovieList';
import configureMockStore from 'redux-mock-store';

describe("Movie List Container", () => {

  const movies = [{
    name: "Gunda",
    snippet: "Greatest movie of all time.",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50_.jpg"
  }, {
    name: "Tabaahi - The Destroyer",
    snippet: "Don't awaken his dark side.",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL50_SY1000_CR0,0,649,1000_AL_.jpg"
  }
  ];
  var shallowWrapper, store;

  beforeEach(() => {
    store = configureMockStore()({
      movies: [{
          name: "Gunda",
          snippet: "Greatest movie of all time.",
          imageUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50_.jpg"
        }, {
          name: "Tabaahi - The Destroyer",
          snippet: "Don't awaken his dark side.",
          imageUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_QL50_SY1000_CR0,0,649,1000_AL_.jpg"
        }
      ]
    });
    shallowWrapper = shallow(<MovieListContainer store={store}/>);
  })


  it("should pass the entire movie list as props to the subcomponent", () => {
    expect(shallowWrapper.find(MovieList).props().movies).toEqual(movies);
  })
})
