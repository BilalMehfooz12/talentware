const Input = ({
  type,
  placeholder,
  inputStyle,
  selectedValue,
  handleSelect,
  selectStyle,
  data,
  value,
}) => {
  return (
    <div>
      {type == "text" && (
        <input
          type={type}
          placeholder={placeholder}
          className={`${inputStyle}`}
        />
      )}

      {type == "select" && (
        <select
          value={value}
          onChange={handleSelect}
          className={`${selectStyle}`}
        >
          <option value="" hidden>
            {selectedValue}
          </option>
          {data.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Input;
