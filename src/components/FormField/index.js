import React from 'react';

function FormField({ label, type, name, value, onChange }) {
  return (
    <div>
      <label>
        {label}:&nbsp;
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

export default FormField;