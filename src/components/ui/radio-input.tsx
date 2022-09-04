import { useFormikContext } from "formik";

type RadioInputProps = {
  className?: string;
  name: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  label?: string;
  value?: string;
  bordered?: boolean;
  children?: JSX.Element | JSX.Element[];
} & React.InputHTMLAttributes<HTMLInputElement>;

function RadioInput({
  className,
  name,
  type = "text",
  placeholder,
  label,
  value,
  bordered,
  ...props
}: RadioInputProps) {
  const { values } = useFormikContext();
  value = value ? value : label;

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
        value={value}
        checked={values?.[name] == value}
        {...props}
      />
      <span className="label-text">{label}</span>
    </label>
  );
}

export default RadioInput;
