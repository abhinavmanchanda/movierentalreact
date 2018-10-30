import { connect } from 'react-redux'
import {MovieList} from '../components/MovieList'

const mapStateToProps = state =>  ({movies: state.movies})
const mapDispatchToProps = dispatch =>  {return {}}

const MovieListContainer = connect(mapStateToProps, mapDispatchToProps)(MovieList)
export default MovieListContainer
