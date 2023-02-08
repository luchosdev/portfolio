import React from 'react';

const Button = ({ label, Style, onClick, type }) => {
  return (
    <button
      type={type}
      className={`cursor-pointer md:text-xl lg:text-2xl ${Style} rounded-md bg-violet-600 px-4 py-2 text-lg text-white shadow-lg transition-all duration-200 hover:bg-violet-700 hover:shadow-none hover:shadow-gray-800 active:bg-violet-600`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
