type FormControlProps = {
  className?: string;
  name?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  label?: string;
  children?: JSX.Element | JSX.Element[];
} & React.InputHTMLAttributes<HTMLInputElement>;

function FormControl({
  className,
  name,
  type = "text",
  placeholder,
  label,
  children,
  ...props
}: FormControlProps) {
  return (
    <div className={`form-control ${children ? className : ""}`}>
      {label && (
        <label className="label font-semibold" htmlFor={name}>
          {label}
        </label>
      )}

      {children ? (
        children
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder ? placeholder : name?.toUpperCase()}
          className={`input input-bordered w-full ${className}`}
          {...props}
        />
      )}
    </div>
  );
}

export default FormControl;
