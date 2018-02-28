import Image from '../images/film-img.jpg';
let films_initial_state = [{
    id: 0,
    name: 'Black Panther',
    description: 'After the events',
    rating: 7,
    img: Image
  },
  {
    id: 1,
    name: 'Dunkirk',
    description: 'text text text',
    rating: 8,
    img: Image
  },
  {
    id: 2,
    name: 'Kingsman',
    description: 'Kingsman: The Golden Circle',
    rating: 7,
    img: Image
  }
];

const films = (state = films_initial_state, action) => {
  switch (action.type) {
    case 'FORM_SUBMIT':
      return [
        ...state.slice(0, action.value.id),
        action.value,
        ...state.slice(action.value.id+1),
      ];
    default:
      return state;
  }
};

const selectedFilm = (state = null, action) => {
  switch (action.type) {
    case 'SELECTED_FILM':
      return action.value;
    case 'SELECTED_FILM_CLEAN':
      return null;
    case 'FORM_CHANGE':
      return {
        ...state,
        [action.property]: action.value
      };
    case 'CHANGE_IMAGE':
      console.log({
        ...state,
        img: action.img,
        file: action.file
      })
      return {
        ...state,
        img: action.img,
        file: action.file
      };
    case 'FORM_CANCEL':
      return null;
    case 'FORM_SUBMIT_CLEAN':
      return null;
    default:
      return state;
  }
};

export { films, selectedFilm}