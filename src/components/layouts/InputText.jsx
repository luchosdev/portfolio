/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line object-curly-newline
function InputText({ placeholder, onChange, Style, name }) {
  return (
    <input
      required
      className={`my-1 rounded-sm bg-white p-2 text-black outline-none md:text-xl lg:text-2xl ${Style}`}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default InputText;
