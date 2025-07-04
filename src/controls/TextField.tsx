import React, { forwardRef, type ForwardedRef } from "react";
import type { FieldError } from "react-hook-form";

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: FieldError | undefined;
};

const TextField = forwardRef(
  (props: TextFieldProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { type = "text", className = "", label, error, ...other } = props;
    return (
      <div className="form-floating">
        <input
          type={type}
          className={`form-control ${className}`}
          placeholder={label}
          ref={ref}
          {...other}
        />
        <label>{label}</label>
        {error?.message && (
          <div className="error-feedback">{error?.message}</div>
        )}
      </div>
    );
  }
);

export default TextField;
