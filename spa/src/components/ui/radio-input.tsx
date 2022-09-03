type RadioInputProps = {
  className?: string;
  name: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  label?: string;
  bordered?: boolean;
  children?: JSX.Element | JSX.Element[];
} & React.InputHTMLAttributes<HTMLInputElement>;

function RadioInput({
  className,
  name,
  type = "text",
  placeholder,
  label,
  bordered,
  ...props
}: RadioInputProps) {
  return (
    <label
      className={`label cursor-pointer justify-start gap-2 ${
        bordered ? "input input-bordered" : ""
      }`}
    >
      <input
        type="radio"
        id={name}
        name={name}
        placeholder={placeholder ? placeholder : name?.toUpperCase()}
        className={`radio checked:bg-primary ${className}`}
        {...props}
      />
      <span className="label-text">{label}</span>
    </label>
  );
}

export default RadioInput;
