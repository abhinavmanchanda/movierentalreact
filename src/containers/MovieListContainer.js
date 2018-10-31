import { connect } from 'react-redux'
import {MovieList} from '../components/MovieList'
import * as actions from '../actions/MovieActions'

const mapStateToProps = state =>  ({movies: state.movies})
const mapDispatchToProps = dispatch =>  ({
  reserveMovie: name => dispatch(actions.toggleMovieReservation(name))
})

const MovieListContainer = connect(mapStateToProps, mapDispatchToProps)(MovieList)
export default MovieListContainer
