import React from 'react';

const TextArea = ({ placeholder, onChange, Style, name }) => {
    return (
        <textarea
            required
            className={`rounded-sm p-2 outline-none my-1 text-black resize-none ${Style}`}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
        />
    );
};

export default TextArea;
