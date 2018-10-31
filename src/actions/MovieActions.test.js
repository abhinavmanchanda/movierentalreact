import * as actions from './MovieActions'
import * as types from './ActionTypes'

describe("Actions", () => {
  it("reserve movie should return action with id", () => {
    var reserveAction =  actions.toggleMovieReservation("hello")
    expect(reserveAction.type).toEqual(types.TOGGLE_RESERVE_MOVIE)
    expect(reserveAction.name).toEqual("hello")
  })
})