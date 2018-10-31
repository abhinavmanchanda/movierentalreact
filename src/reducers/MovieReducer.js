import * as types from '../actions/ActionTypes'

const initialState = {
  movies: []
}
const MovieReducer = (state = initialState, action) => {
  if (types.TOGGLE_RESERVE_MOVIE === action.type) {
    return state.movies.map(
      movie =>
        movie.id === action.id ? { ...movie, reserved: !movie.reserved } : movie
    )
  }
  return state;
}

export default MovieReducer;