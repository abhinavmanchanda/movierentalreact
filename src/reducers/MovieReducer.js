import * as types from '../actions/ActionTypes'

const initialState = []

const MovieReducer = (state = initialState, action) => {
  if (types.TOGGLE_RESERVE_MOVIE === action.type) {
    return state.map(
      movie =>
        movie.name === action.name ? { ...movie, reserved: !movie.reserved } : movie
    )
  }
  return state;
}

export default MovieReducer;