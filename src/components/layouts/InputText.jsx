const InputText = ({ placeholder, onChange, Style, name, type }) => {
    return (
        <input
            required
            type={type}
            className={`rounded-sm p-2 outline-none my-1 text-black ${Style}`}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

export default InputText;
