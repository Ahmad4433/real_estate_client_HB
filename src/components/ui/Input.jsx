import "./input.css";
import useValidateInput from "../../hooks/useValidateInput";
const Input = ({ type, onChange, value, placeholder, required, name }) => {
  const { blurHandler, isValid } = useValidateInput(value);

  return (
    <input
      name={name}
      style={{ borderColor: isValid && !value && "red" }}
      type={type}
      onChange={onChange}
      value={value}
      className="ui_input"
      required={required}
      placeholder={placeholder}
      onBlur={blurHandler}
    />
  );
};

export default Input;
