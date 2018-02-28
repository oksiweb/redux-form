import React from 'react';

const Textarea = ({value, onChange, property}) => {
  return (
    <div>
      <textarea value={value} onChange={(e) => onChange(property, e.target.value)}/>
    </div>
  );
};

export default Textarea;