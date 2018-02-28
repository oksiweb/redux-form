import { combineReducers } from 'redux'
import {films, selectedFilm} from './reducers'

const reducer = combineReducers({
  films: films,
  selectedFilm: selectedFilm
});

export default reducer;

