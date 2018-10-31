import * as types from './ActionTypes'

export const toggleMovieReservation = name => {
  return ({
  type: types.TOGGLE_RESERVE_MOVIE,
  name
})}