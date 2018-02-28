import React from 'react';
import { connect } from 'react-redux';
import FilmsList from '../components/Films/FilmsList';
import { bindActionCreators } from 'redux'
import { actionSelectedFilm } from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    films: state.films,
    selectedFilm: state.selectedFilm
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: bindActionCreators(actionSelectedFilm, dispatch)
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmsList);