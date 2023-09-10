import { ChangeEvent } from "react";

interface InputFieldProps {
  label: string;
  type: "text" | "number" | "email" | "password";
  name: string;
  value: string;
  error?: string;
  disabled?: boolean;
  placeholder: string;
  required?: boolean;
  showRequiredStar?: boolean;
  // tailwind width classes e.g. w-1/2
  width?: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
}

function InputField({
  label,
  type,
  name,
  value,
  error,
  disabled = false,
  placeholder,
  required = false,
  showRequiredStar = true,
  width,

  onChange,
  ...props
}: InputFieldProps) {
  return (
    <label className={` m-1 block ${width ? width : ""}`}>
      <span
        className={` block text-sm font-medium text-slate-700 
         ${
           required && showRequiredStar
             ? "after:ml-0.5 after:text-red-500 after:content-['*'] "
             : ""
         } `}
      >
        {label}
      </span>
      <input
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        disabled={disabled}
        className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
        placeholder={placeholder}
        required={required}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </label>
  );
}

export default InputField;
