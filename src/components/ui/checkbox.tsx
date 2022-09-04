import { useFormikContext } from "formik";

type CheckboxProps = {
  className?: string;
  name: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  label?: string;
  value?: string;
  bordered?: boolean;
  children?: JSX.Element | JSX.Element[];
} & React.InputHTMLAttributes<HTMLInputElement>;

function Checkbox({
  className,
  name,
  type = "text",
  placeholder,
  label,
  value,
  bordered,
  children,
  ...props
}: CheckboxProps) {
  const { values } = useFormikContext();
  value = value ? value : name;

  return (
    <label
      className={`label cursor-pointer justify-start gap-2 ${
        bordered ? "input input-bordered" : ""
      }`}
    >
      <input
        type="checkbox"
        name={name}
        id={name}
        value={value}
        className="checkbox checkbox-primary"
        checked={values?.[name].includes(value)}
        {...props}
      />
      {children ? children : <span className="label-text">{label}</span>}
    </label>
  );
}

export default Checkbox;
