const SELECTED_FILM = 'SELECTED_FILM';
const FORM_CHANGE = 'FORM_CHANGE';
const FORM_CANCEL = 'FORM_CANCEL';
const FORM_SUBMIT = 'FORM_SUBMIT';
const FORM_SUBMIT_CLEAN = 'FORM_SUBMIT_CLEAN';
const CHANGE_IMAGE = 'CHANGE_IMAGE';

export const actionSelectedFilm = (film) => {
   return {
     type: SELECTED_FILM,
     value: film
   }
};

export const actionFormChange = (property, value) => {
  return {
    type: FORM_CHANGE,
    property: property,
    value: value
  }
};

export const actionFormCancel = (value) => {
  return {
    type: FORM_CANCEL,
    value: value
  }
};

export const actionFormSubmit = (value) => {
  return {
    type: FORM_SUBMIT,
    value: value
  }
};

export const actionFormSubmitClean = (value) => {
  return {
    type: FORM_SUBMIT_CLEAN,
    value: value
  }
};

export const actionChangeImage = (value) => {
  return {
    type: CHANGE_IMAGE,
    img: value.img,
    file: value.file
  }
};

