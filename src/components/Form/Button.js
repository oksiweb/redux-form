import React from 'react';

const Button = ({buttonText, onClick, onFormSubmitClean, className, selectedFilm}) => {
  return (
    <button onClick={(e) => buttonText === 'Cancel' ? onClick(e) : onFormSubmitClean(onClick(selectedFilm))}
            className={className}>
            {buttonText}
    </button>
  );
};

export default Button;