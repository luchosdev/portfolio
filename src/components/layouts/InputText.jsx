const InputText = ({ placeholder, onChange, Style, name, type }) => {
  return (
    <input
      required
      type={type}
      className={`my-1 rounded-sm p-2 text-black outline-none md:text-xl lg:text-2xl ${Style}`}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default InputText;
