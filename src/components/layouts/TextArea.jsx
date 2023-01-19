import React from 'react';

const TextArea = ({ placeholder, onChange, Style, name }) => {
    return (
        <textarea
            required
            className={`rounded-sm p-2 outline-none my-1 md:text-xl lg:text-2xl text-black resize-none ${Style}`}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
        />
    );
};

export default TextArea;
