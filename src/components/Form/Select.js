import React from 'react';

const Select = ({selected, onChange, rating, onClick, property}) => {
  return (
      <div>
        <select value={selected} onChange={(e) => onChange(property, e.target.value)} onClick={onClick}>
          {
            rating.map((r, index) => ( <option key={index} value={r} onClick={onClick}>{r}</option>))
          }
        </select>
      </div>
  );
}

export default Select;