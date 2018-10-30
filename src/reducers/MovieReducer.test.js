import reducer from './MovieReducer'
import * as types from '../actions/ActionTypes'

describe("Movie Reducer", () => {
  const movies = [{
    name:"Andhadhun",
    snippet:"abcd"
  }, {
    name:"Badhai Ho",
    snippet:"fjf",
    reserved:true
  }, {
    name:"Tumbbad",
    reserved: false
  }]

  it("should reserve a movie when the reserve flag is not set", () => {
    expect(reducer(movies, {
      type: types.RESERVE_MOVIE,
      name:"Andhadhun"
    }).find(movie=>movie.name==="Andhadhun").reserved).toEqual(true)
  })

  it("should unreserve a movie when it is reserved", () => {
    expect(reducer(movies, {
      type: types.RESERVE_MOVIE,
      name:"Badhai Ho"
    }).find(movie=>movie.name==="Badhai Ho").reserved).toEqual(false)
  })
  
  it("should reserve a movie when the reserve flag is not set", () => {
    expect(reducer(movies, {
      type: types.RESERVE_MOVIE,
      name:"Tumbbad"
    }).find(movie=>movie.name==="Tumbbad").reserved).toEqual(true)
  })
})