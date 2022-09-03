type CheckboxProps = {
  className?: string;
  name: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  label?: string;
  bordered?: boolean;
  children?: JSX.Element | JSX.Element[];
} & React.InputHTMLAttributes<HTMLInputElement>;

function Checkbox({
  className,
  name,
  type = "text",
  placeholder,
  label,
  bordered,
  children,
  ...props
}: CheckboxProps) {
  return (
    <label
      className={`label cursor-pointer justify-start gap-2 ${
        bordered ? "input input-bordered" : ""
      }`}
    >
      <input type="checkbox" className="checkbox checkbox-primary" {...props} />
      {children ? children : <span className="label-text">{label}</span>}
    </label>
  );
}

export default Checkbox;
