import * as types from './ActionTypes'

export const toggleMovieReservation = name => ({
  type: types.TOGGLE_RESERVE_MOVIE,
  name
})