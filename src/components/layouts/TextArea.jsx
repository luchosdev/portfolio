import React from 'react';

const TextArea = ({ placeholder, onChange, Style, name }) => {
  return (
    <textarea
      required
      className={`my-1 resize-none rounded-sm p-2 text-black outline-none md:text-xl lg:text-2xl ${Style}`}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  );
};

export default TextArea;
