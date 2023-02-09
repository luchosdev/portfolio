import React from 'react';

// eslint-disable-next-line react/prop-types
function Button({ label, Style }) {
  return (
    <button
      type="button"
      className={`cursor-pointer md:text-xl lg:text-2xl ${Style} rounded-md bg-violet-600 px-4 py-2 text-lg text-white shadow-lg transition-all duration-200 hover:bg-violet-700 hover:shadow-none hover:shadow-gray-800 active:bg-violet-600`}
    >
      {label}
    </button>
  );
}

export default Button;
