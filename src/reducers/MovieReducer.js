import * as types from '../actions/ActionTypes'

const MovieReducer = (state = [], action) => {
  if(types.TOGGLE_RESERVE_MOVIE === action.type){
    return state.map(
    movie =>
      movie.id === action.id ? { ...movie, reserved: !movie.reserved } : movie
  )
}

  return state;
}

export default MovieReducer;