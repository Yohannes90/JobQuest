interface InputFieldProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  title: string;
  name: string;
}

const InputField: React.FC<InputFieldProps> = ({
  handleChange,
  value,
  title,
  name,
}) => {
  return (
      <label className="sidebar-label-container">
        <input
          type="radio"
          name={name}
          className="text-harPrimary"
          value={value}
          onChange={handleChange}
        />
        <span className="mt-0.5 checkmark"></span>
        <span className="text-black">{title}</span>
      </label>
  );
};

export default InputField;
