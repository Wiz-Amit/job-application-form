import { useFormikContext } from "formik";

type FormControlProps = {
  className?: string;
  name: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  label?: string;
  value?: any;
  children?: JSX.Element | JSX.Element[];
} & React.InputHTMLAttributes<HTMLInputElement>;

function FormControl({
  className,
  name,
  type = "text",
  placeholder,
  label,
  value,
  children,
  ...props
}: FormControlProps) {
  const { values, errors, touched } = useFormikContext<Object>();

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
          value={value ?? values?.[name].toString()}
          {...props}
        />
      )}

      <span className="text-sm text-error">
        {errors && errors?.[name] && touched?.[name] && errors?.[name]}
      </span>
    </div>
  );
}

export default FormControl;
