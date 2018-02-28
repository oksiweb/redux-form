import React from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form/Form';
import { bindActionCreators } from 'redux'
import { actionFormChange, actionFormCancel, actionFormSubmit, actionFormSubmitClean, actionChangeImage } from '../actions/actions'

const mapStateToProps = (state) => {
  return {
    selectedFilm: state.selectedFilm
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeImage: bindActionCreators(actionChangeImage, dispatch),
    onChangeForm: bindActionCreators(actionFormChange, dispatch),
    onFormCancel: bindActionCreators(actionFormCancel, dispatch),
    onFormSubmit: bindActionCreators(actionFormSubmit, dispatch),
    onFormSubmitClean: bindActionCreators(actionFormSubmitClean, dispatch),
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);