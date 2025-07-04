import React, { forwardRef, type ForwardedRef } from "react";
import type { FieldError } from "react-hook-form";
import type { SelectOptionType } from "../types";

type SelectFieldProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: FieldError | undefined;
  options: SelectOptionType[];
};

const Select = forwardRef(
  (props: SelectFieldProps, ref: ForwardedRef<HTMLSelectElement>) => {
    const { className = "", label, error, options, ...other } = props;
    return (
      <div className="form-floating">
        <select className={`form-select ${className}`} ref={ref} {...other}>
          {options.map((x, indx) => (
            <option key={indx} value={x.value}>
              {x.text}
            </option>
          ))}
        </select>
        <label>{label}</label>
        {error && <div className="error-feedback">{error.message}</div>}
      </div>
    );
  }
);

export default Select;
