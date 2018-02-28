import React from 'react';

const Input = ({value, onChange, type, property}) => {
    return (
        <div>
          <input value={value}
                 onChange={(e) => onChange(property, e.target.value)}
                 type={type}/>
        </div>
    )
};

export default Input;